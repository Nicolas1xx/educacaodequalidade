export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '.hc'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible Next Variable', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Bitter Variable', 'Georgia', 'serif']
      },
      colors: {
        papel: '#f4f5f0', folha: '#ffffff', pauta: '#d5e0ec', tinta: '#1c2b5a', grafite: '#2f3340', lapis: '#5b6472',
        caneta: {DEFAULT: '#1d44b5', escura: '#163590'}, margem: '#c5192d', marca: '#ffe566', lousa: '#1e4a3a', giz: '#f1efe6'
      },
      borderRadius: {md: '4px', lg: '6px'},
      screens: {md: '641px', lg: '1025px'}
    }
  },
  plugins: []
}
