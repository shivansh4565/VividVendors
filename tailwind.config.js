/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        keyframes: {
            floatFade: {
                '0%': { opacity: '0', transform: 'translateY(0)' },
                '50%': { opacity: '1', transform: 'translateY(-10px)' },
                '100%': { opacity: '0.95', transform: 'translateY(0)' },
            },
        },
        animation: {
            floatFade: 'floatFade 4s ease-in-out infinite',
        },
    },
};
export const plugins = [];
