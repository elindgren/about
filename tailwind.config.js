module.exports = {
  darkMode: 'class', //media
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section-background': '#1f2937',
        'light-background': '#f9fafb', // gray-50
        'light-background-secondary': '#e2e8f0',
        'light-border': '#9ca3af', // gray-400
        'light-primary': '#A303A6',
        'light-secondary': '#F25C84',
        'light-accent': '#F2CB05',
        'light-text-primary': '#f9fafb',
        'light-text-secondary': '#9ca3af',
        'dark-background': '#0f172a',
        'dark-background-secondary': '#190626',
        'dark-border': '#e5e7eb', // gray-200
        'dark-primary': '#f9fafb',
        'dark-secondary': '#590B54',
        'dark-accent': '#F2CB05',
        'dark-text-primary': '#f9fafb',
        'dark-text-secondary': '#8A038C',
      },
      width: {
        '128': '32rem',
        '196': '49rem'
      }
    },
  },
  plugins: [],
}
