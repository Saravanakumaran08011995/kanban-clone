/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'container':"#F5F5F5",
      'todoColor':'#5030E5',
      'onProgressColor':'#FFA500',
      'doneColor': '#76A5EA',
      'counterColor': '#E0E0E0',
      'counterFontColor': '#625F6D',
      'hrDoneColor':'#8BC48A',
      'hrBgToDo': '#800080',
      'lowPriorityBgColor': 'rgba(223, 168, 116, 0.2)',
      'highPriorityBgColor': 'rgba(216, 114, 125, 0.1)',
      'completedBgColor': 'rgba(131, 194, 157, 0.2)',
      'lowPriorityFontColor': '#D58D49',
      'highPriorityFontColor': '#D8727D',
      'completedFontColor': '#68B266',
      'headingFontColor': '#0D062D',
      'descFontColor': '#787486',
      'optionColor':'#0D062D',
      'arrowColor':'#787486',
      'profileNumberColor':'#D25B68',
      'profileNumberBgColor':'#F4D7DA',
      'filterBorderColor':'#787486',
      'arrowDownColor':'#292D32',
      'hrColor':'#DBDBDB',
      'activeColor':'rgba(80, 48, 229, 0.08)',
      'myProject1Color':'#7AC555',
      'myProject2Color':'#E4CCFD',
      'thoughtsColor':'#C4C4C4',
      'thoughtsColor2':'rgba(252, 214, 74, 0.7)',
      'thoughtsColor3':'#FBCB18',
      

      


    },
    boxShadow: {
      'filter-shadow': '0px 44px 84px 6px #D8D9DB',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },screens: {
      'fold':'279px',
      'foldundo':'280px',
      'sm':'640px',
      'md': '768px',
      'lg' : '1125px'
    },
    
  },
  plugins: [],
}