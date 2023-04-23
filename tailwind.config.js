/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            typography: () => ({
                DEFAULT: {
                    css: {
                        pre: false,
                        code: false,
                        'code::before': false,
                        'code::after': false,
                    },
                },
            }),
            width: {
                0.5: '0.125rem',
            },
            borderWidth: {
                1: '1.5px',
            },
            colors: {
                'primary-1': '#27272A',
                'secondary-1': '#33373A',
                'secondary-2': '#6B6B6B',
                'ascent-1': '#E0E2E8',
                'red-1': '#FEAFA8',
                'green-1': '#84D586',
            },
        },
    },

    plugins: [require('@tailwindcss/typography')],
}
