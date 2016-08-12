'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** @jsx createElement */


var _src = require('../../src/');

var _src2 = _interopRequireDefault(_src);

var _hello = require('./hello.css');

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createElement = _src2.default.createElement;
var render = _src2.default.render;


var style = {
  height: 100,
  width: '50%',
  opacity: 0.3,
  zIndex: 12,
  boxShadow: '0 0 2px 1px red'
};

var Hello = function Hello(props) {
  return createElement(
    'div',
    { className: 'hello-world', style: style },
    createElement(
      'span',
      { className: 'hello' },
      props.greeting
    ),
    ' ',
    createElement(
      'span',
      { className: _hello2.default.world },
      props.name
    )
  );
};

var High = function () {
  function High(props) {
    _classCallCheck(this, High);

    this.props = props;
  }

  _createClass(High, [{
    key: 'render',
    value: function render() {
      return createElement(Hello, { greeting: 'High', name: 'World' });
    }
  }]);

  return High;
}();

render(createElement(High, { name: 'World' }), document.body);

