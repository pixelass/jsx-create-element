# jsx-create-element

[![GitHub license](https://img.shields.io/github/license/pixelass/jsx-create-element.svg)](https://github.com/pixelass/jsx-create-element/blob/master/LICENSE)  
[![Travis](https://img.shields.io/travis/pixelass/jsx-create-element.svg)](https://travis-ci.org/pixelass/jsx-create-element)
[![David](https://img.shields.io/david/pixelass/jsx-create-element.svg)](https://david-dm.org/pixelass/jsx-create-element)
[![David](https://img.shields.io/david/dev/pixelass/jsx-create-element.svg)](https://david-dm.org/pixelass/chrome-extension-boilerplate#info=devDependencies&view=table)  
[![GitHub issues](https://img.shields.io/github/issues/pixelass/jsx-create-element.svg)](https://github.com/pixelass/jsx-create-element/issues)
[![GitHub forks](https://img.shields.io/github/forks/pixelass/jsx-create-element.svg)](https://github.com/pixelass/jsx-create-element/network)
[![GitHub stars](https://img.shields.io/github/stars/pixelass/jsx-create-element.svg)](https://github.com/pixelass/jsx-create-element/stargazers)  
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Demo
 [Demo on Codepen](http://codepen.io/pixelass/pen/wWRRrB)
 
## Usage

```shell
npm install --save-dev jsx-create-element
```

```js
/** @jsx jsx.createElement */
import jsx from 'jsx-create-element'

const className = 'foobar'

const hello = name => (
  <div className={className}>
    <h1>Hello <span>{name}</span></h1>
  </div>
)

jsx.render(hello('World'), document.body)
```

