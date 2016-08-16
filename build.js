const fs = require('fs')
const Log = require('log')
const browserify = require('browserify')
const babelify = require('babelify')
const errorify = require('errorify')
const uglifyify = require('uglifyify')
const cssmodulesify = require('css-modulesify')

const log = new Log('info')

const fileMap = {
  'dist.js': 'jsx-create-element'
}

const files = Object.keys(fileMap)

files.forEach(file => {
  const inFile = `src/${file}`
  const outFile = `dist/${fileMap[file]}`
  const b = browserify({
    entries: [inFile],
    plugin: [errorify]
  }).transform({global: true},'uglifyify')

  b.plugin(cssmodulesify, {
    rootDir: __dirname,
    output: `${outFile}.css`
  })
  function bundle() {
    b.bundle().pipe(fs.createWriteStream(`${outFile}.js`))
  }
  b.on('log',  message => log.info(message))
  b.on('error',  message => log.error(message))
  bundle()
})