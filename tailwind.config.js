// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {

            colors: {
                'blue-navbar': '#1e1add',
                'green-fluo': '3cc13b'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
