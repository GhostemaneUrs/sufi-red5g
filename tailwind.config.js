/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 3px 16px #D1E8FF74',
        container: '0px 0px 16px #00000029',
        pagination: '0px 3px 16px #AAAAAA4D'
      },
      backgroundColor: {
        'table-header': 'rgba(247, 247, 247, 1)'
      }
    }
  },
  plugins: []
}
