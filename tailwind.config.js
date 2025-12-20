// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif'], // Sets the default sans font
                mono: ['var(--font-jetbrains-mono)', 'monospace'], // Example of another font
                header: ['var(--font-host-grotesk)', 'sans-serif'], // Define a new utility for headings
            },
        },
    },
    plugins: [],
};