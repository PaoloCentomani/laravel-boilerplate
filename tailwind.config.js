module.exports = {
  purge: false,
  theme: {
    // colors: {
    //   black: '#000',
    //   current: 'currentColor',
    //   transparent: 'transparent',
    //   white: '#fff'
    // },
    container: {
      padding: '1rem'
    },
    extend: {
      boxShadow: {
        glare: 'inset 0 2px 0 rgba(255, 255, 255, 0.15)',
        outline: 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(99, 179, 237, 0.25)'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
