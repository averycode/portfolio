/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            text: "#02050f",
            text2: "#ffffff",
            background: "#f2f5fd",
            background2: "#ffffff",
            primary: "#284be5",
            secondary: "#ef7fcc",
            accent: "#ea5571",
        },
        extend: {},
        container: {
            padding: "2rem",
        },
    },
    plugins: [require("daisyui")],
};
