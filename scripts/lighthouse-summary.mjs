import fs from "fs";
import path from "path";

const BASE_DIR = ".ai/performance/latest";
const FORM_FACTORS = ["mobile", "desktop"];
const TOP_OPPORTUNITIES = 5;

function readManifest(formFactor) {
  const manifestPath = path.join(BASE_DIR, formFactor, "manifest.json");
  if (!fs.existsSync(manifestPath)) return [];
  const entries = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  return entries.filter((entry) => entry.isRepresentativeRun);
}

function pathnameFor(url) {
  try {
    const { pathname } = new URL(url);
    return pathname === "" ? "/" : pathname;
  } catch {
    return url;
  }
}

function topOpportunities(jsonPath) {
  const report = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  return Object.values(report.audits)
    .filter(
      (audit) =>
        audit.details?.type === "opportunity" &&
        typeof audit.details.overallSavingsMs === "number" &&
        audit.details.overallSavingsMs > 0
    )
    .sort((a, b) => b.details.overallSavingsMs - a.details.overallSavingsMs)
    .slice(0, TOP_OPPORTUNITIES)
    .map((audit) => ({
      title: audit.title,
      savingsMs: Math.round(audit.details.overallSavingsMs),
    }));
}

function scorePercent(score) {
  return score == null ? "—" : Math.round(score * 100);
}

const byPath = new Map();
for (const formFactor of FORM_FACTORS) {
  for (const entry of readManifest(formFactor)) {
    const pathname = pathnameFor(entry.url);
    if (!byPath.has(pathname)) byPath.set(pathname, {});
    byPath.get(pathname)[formFactor] = entry;
  }
}

if (byPath.size === 0) {
  console.error(
    `No Lighthouse reports found under ${BASE_DIR}/{mobile,desktop}. Run "npm run lighthouse:report" first.`
  );
  process.exit(1);
}

const lines = [];
lines.push("# Lighthouse report summary");
lines.push("");
lines.push(`Generated ${new Date().toISOString()}`);
lines.push("");
lines.push("| Page | Mobile perf | Desktop perf |");
lines.push("| --- | --- | --- |");
for (const [pathname, entries] of [...byPath.entries()].sort()) {
  lines.push(
    `| ${pathname} | ${scorePercent(entries.mobile?.summary.performance)} | ${scorePercent(
      entries.desktop?.summary.performance
    )} |`
  );
}

for (const [pathname, entries] of [...byPath.entries()].sort()) {
  lines.push("");
  lines.push(`## ${pathname}`);
  for (const formFactor of FORM_FACTORS) {
    const entry = entries[formFactor];
    if (!entry) continue;
    lines.push("");
    lines.push(`**${formFactor}** — performance ${scorePercent(entry.summary.performance)}`);
    const opportunities = topOpportunities(entry.jsonPath);
    if (opportunities.length === 0) {
      lines.push("- No significant opportunities found.");
    } else {
      for (const { title, savingsMs } of opportunities) {
        lines.push(`- ${title} — ~${savingsMs}ms`);
      }
    }
  }
}

const outPath = path.join(BASE_DIR, "summary.md");
fs.writeFileSync(outPath, lines.join("\n") + "\n");
console.log(`Wrote ${outPath}`);
