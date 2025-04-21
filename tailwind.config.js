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
                    yellow50: "#917700",
                    accent: '#188d93',
                    neutral: '#02140d',
                    base50: '#E8ECEF',
                    base100: '#188d93',
                    base200: '#188E91',
                    error: '#ff1944',
                },
                light: {
                    DEFAULT: '#D0D2E0',
                    text: '#333333',
                    primary: '#FFF7FF',
                    secondary: '#eec201',
                    red: "#5B191B",
                    yellow: "#ECAD00",
                    yellow50: "#917700",
                    accent: '#188d93',
                    neutral: '#02140d',
                    base50: '#E8ECEF',
                    base100: '#188d93',
                    base200: '#188E91',
                    error: '#ff1944',
                },
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'zoom-in': {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'slide-in-letter': {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'zoom-letter': {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'bounce-letter': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'slide-down': 'slide-down 0.6s ease-out forwards',
                'zoom-in': 'zoom-in 0.5s ease-out forwards',
                'bounce': 'bounce 1s infinite',
                'slide-in-letter': 'slide-in-letter 0.4s ease-out forwards',
                'zoom-letter': 'zoom-letter 0.3s ease-out forwards',
                'bounce-letter': 'bounce-letter 0.6s ease-out forwards',
            },
        },
    },
    plugins: [require('daisyui')],
};
