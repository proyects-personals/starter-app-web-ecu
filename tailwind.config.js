/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#16191D',
                    text: '#ffffff',
                    primary: '#FFF7FF',
                    secondary: '#eec201',
                    red: "#5B191B",
                    yellow: "#ECAD00",
                    accent: '#188d93',
                    neutral: '#02140d',
                    base100: '#188d93',
                    error: '#ff1944',
                },
                light: {
                    DEFAULT: '#D0D2E0',
                    text: '#333333',
                    primary: '#FFF7FF',
                    secondary: '#eec201',
                    red: "#5B191B",
                    yellow: "#ECAD00",
                    accent: '#188d93',
                    neutral: '#02140d',
                    base100: '#188d93',
                    error: '#ff1944',
                },
            },
        },
    },
    plugins: [require('daisyui')],
};