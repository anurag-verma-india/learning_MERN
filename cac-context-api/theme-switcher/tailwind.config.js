/** @type {import('tailwindcss').Config} */
EventTargetodule.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                whitesmoke: {
                    100: "#f9fafc",
                    200: "#f2efef",
                },
                gray: {
                    100: "#949494",
                    200: "#8f8f8f",
                    300: "#878787",
                    400: "#808080",
                    500: "#7d7d7d",
                    600: "#777",
                },
                black: "#000",
                lightgray: "#cecece",
                gainsboro: {
                    100: "#e3e3e3",
                    200: "#dadada",
                },
                dimgray: {
                    100: "#636363",
                    200: "#505050",
                },
                white: "#fff",
                silver: "#c7c7c7",
                darkgray: {
                    100: "#b4b4b4",
                    200: "#b2b2b2",
                },
            },
            fontFamily: {
                inter: "Inter",
                inherit: "inherit",
            },
            borderRadius: {
                "81xl": "100px",
            },
            padding: {
                "3xs": "10px",
                xl: "20px",
                "8xs": "5px",
            },
        },
        fontSize: {
            base: "16px",
            "2xs": "11px",
            xs: "12px",
            inherit: "inherit",
        },
    },
    corePlugins: {
        preflight: false,
    },
};
