// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist)', 'sans-serif'], // Sets the default sans font
                mono: ['var(--font-geist-mono)', 'monospace'], // Example of another font
                header: ['var(--font-host-grotesk)', 'sans-serif'], // Define a new utility for headings
            },
        },
    },
    plugins: [],
};
