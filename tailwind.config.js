/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'plt-blue': '#0A71B6',
                'plt-yellow': '#F9C40A',
                'plt-black': '#190506',
                'plt-orange': '#EB5432',
                'plt-white': '#EAF2F0',
                'plt-gray': '#ccc',
            },
            fontFamily: {
                'dflt-regular': 'Rufina_400Regular',
                'dflt-bold': 'Rufina_700Bold',
            },
        },
    },
    plugins: [],
};
