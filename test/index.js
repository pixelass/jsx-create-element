const fs = require('fs')
const colors = require('colors')
const index = require('../')

const dir = './test'
const file = `${dir}/in/test.jsx`
const fileCSS = `${dir}/out/test.css`
const expectedCSS = `${dir}/out/expected.css`
const outFile = `${dir}/out/result.js`
const expected = `${dir}/out/expected.js`

console.log('Running tests')

function xPect(testType, xpct, rslt) {
  fs.readFile(xpct,'utf-8',(err, data)=> {
    if (err) {
      throw err
    } else {
      const xpctd = data
      if (typeof rslt === 'string') {
        fs.readFile(rslt,'utf-8',(err, data)=> {
          if (err) {
            throw err
          } else {
            if (xpctd === data) {
              console.log(`👍  ${testType} test passed`.green)
            } else {
              console.log(`👎  ${testType} test failed`.red)
              throw new Error('Test failed.')
            }
          }
        })
      } else if (typeof rslt === 'object') {
        if ('content' in rslt) {
          if (xpctd === rslt.content) {
            console.log(`👍  ${testType} test passed`.green)
          } else {
            console.log(`👎  ${testType} test failed`.red)
            throw new Error('Test failed.')
          }
        }
      }
    }
  })
}

xPect('js', outFile, expected)

xPect('css', fileCSS, expectedCSS)

