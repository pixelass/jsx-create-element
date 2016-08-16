const uglifyJS = require('uglify-js')
const fs = require('fs')
const minified = uglifyJS.minify(['test/out/test.js'], {
  compress: {
      dead_code: true,
      drop_debugger: true,
      properties: true,
      drop_console: true,
      unused: true,
      booleans: true
  },
  mangle: {
    'toplevel': true,
    'eval': true
  }
})


fs.writeFile('test/out/test.min.js', minified.code)
