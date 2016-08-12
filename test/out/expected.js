'use strict';

var _ = require('../../');

var _2 = _interopRequireDefault(_);

var _foobar = require('./foobar.css');

var _foobar2 = _interopRequireDefault(_foobar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx createElement */
var createElement = _2.default.createElement;
var render = _2.default.render;


var style = {
  height: 100,
  width: '50%',
  opacity: 0.3,
  zIndex: 12,
  boxShadow: '0 0 2px 1px red'
};

var foo = createElement(
  'div',
  { className: 'foobar', style: style },
  createElement(
    'span',
    { className: 'foo' },
    'Foo'
  ),
  createElement(
    'span',
    { className: _foobar2.default.bar },
    'bar'
  )
);

render(foo, document.body);

