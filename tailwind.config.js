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
            text2: "#f2f4fd",
            background: "#f2f5fd",
            background2: "#02050d",
            prim: "#a5836f",
            sec: "#7d6454",
            acc: "#ffcead",

            /*  text: "#02050f",
            text2: "#f2f4fd",
            background: "#f2f5fd",
            background2: "#02050d",
            primary: "#a5836f",
            newcolor: "#a5836f",
            secondary: "#7d6454",
            accent: "#ffcead", */
        },
        extend: {},
        container: {
            padding: "2rem",
        },
    },
    plugins: [require("daisyui")],
};
