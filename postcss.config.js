// postcss.config.js
// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in your project 
//   content: [
//     './src/**/*.html',
//     './src/**/*.vue',
//     // etc.
//   ],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// })

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('postcss-nested')({ bubble: ['apply'] }),
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : []
  ]
}
