
export function AnimationPathTopBottom() {
  return (
    <div className="relative flex w-full flex-col items-center">
        {/* SVG Paths  */}
        <svg
            className="h-full sm:w-full text-muted"
            width="100%"
            height="100%"
            viewBox="0 10 200 30"
        >
            <g
                stroke="currentColor"
                fill="none"
                strokeWidth="0.4"
                strokeDasharray="100 100"
                pathLength="100"
            >
                <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
                <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
                <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
                <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
                {/* Animation For Path Starting */}
                <animate
                    attributeName="stroke-dashoffset"
                    from="100"
                    to="0"
                    dur="1s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.25,0.1,0.5,1"
                    keyTimes="0; 1"
                />
            </g>
            {/* Blue Lights */}
            <g mask="url(#db-mask-1)">
                <circle
                    className="database db-light-1"
                    cx="0"
                    cy="0"
                    r="12"
                    fill="url(#db-blue-grad)"
                />
            </g>
            <g mask="url(#db-mask-2)">
                <circle
                    className="database db-light-2"
                    cx="0"
                    cy="0"
                    r="12"
                    fill="url(#db-blue-grad)"
                />
            </g>
            <g mask="url(#db-mask-3)">
                <circle
                    className="database db-light-3"
                    cx="0"
                    cy="0"
                    r="12"
                    fill="url(#db-blue-grad)"
                />
            </g>
            <g mask="url(#db-mask-4)">
                <circle
                    className="database db-light-4"
                    cx="0"
                    cy="0"
                    r="12"
                    fill="url(#db-blue-grad)"
                />
            </g>
            <defs>
                {/* 1 -  channel 1 */}
                <mask id="db-mask-1">
                    <path
                        d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
                        strokeWidth="0.5"
                        stroke="white"
                    />
                </mask>
                {/* 2 - channel 2 */}
                <mask id="db-mask-2">
                    <path
                        d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
                        strokeWidth="0.5"
                        stroke="white"
                    />
                </mask>
                {/* 3 - channel 3 */}
                <mask id="db-mask-3">
                    <path
                        d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
                        strokeWidth="0.5"
                        stroke="white"
                    />
                </mask>
                {/* 4 - channel 4 */}
                <mask id="db-mask-4">
                    <path
                        d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
                        strokeWidth="0.5"
                        stroke="white"
                    />
                </mask>
                {/* Blue Grad */}
                <radialGradient id="db-blue-grad" fx="1">
                    <stop offset="0%" stopColor="#00A6F5" />
                    <stop offset="100%" stopColor="transparent" />
                </radialGradient>
            </defs>
        </svg>
    </div>
  )
}
