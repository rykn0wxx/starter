module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-preset-env')({ browsers: 'last 2 versions' })
  ]
}
