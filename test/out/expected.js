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


var toggle = function toggle(c) {
  if (c % 2 < 1) {
    return createElement(
      'fieldset',
      null,
      createElement(
        'label',
        null,
        createElement(
          'span',
          null,
          'Greeting: '
        ),
        createElement('input', { type: 'text', value: state.greeting, onChange: changeGreeting })
      ),
      createElement(
        'button',
        { onClick: handleClick },
        'Change'
      )
    );
  } else {
    return createElement(
      'div',
      null,
      createElement(
        'button',
        { onClick: handleClick },
        'Change Greeting'
      )
    );
  }
};

var names = ['World', 'Everybody', 'Bro'];

var greetings = ['Hi', 'Hello', 'Yo'];

var rnd = function rnd(n) {
  return ~~(Math.random() * n);
};
var rndItem = function rndItem(arr) {
  return arr[rnd(arr.length)];
};

var style = {
  width: '50%',
  zIndex: 12,
  margin: '50px auto',
  padding: 10,
  color: '#fff',
  borderRadius: 5,
  fontFamily: 'sans-serif',
  boxShadow: '0 2px 4px 0 #000'
};

var setState = function setState(newState) {
  Object.assign(state, newState);
  render(createElement(App, null), document.getElementById('app'));
};

var state = {
  counter: 0,
  name: rndItem(names),
  greeting: rndItem(greetings),
  background: '#' + rnd(9) + rnd(9) + rnd(9) + rnd(9) + rnd(9) + rnd(9)
};

var changeGreeting = function changeGreeting(e) {
  console.log('greet');
  setState({
    greeting: e.target.value
  });
};

var changeBackground = function changeBackground(e) {
  e.preventDefault();
  setState({
    background: '#' + rnd(9) + rnd(9) + rnd(9) + rnd(9) + rnd(9) + rnd(9)
  });
};

var changeName = function changeName(e) {
  console.log('name');
  setState({
    name: e.target.value
  });
};

var handleClick = function handleClick(e) {
  console.log('count');
  e.preventDefault();
  setState({
    counter: ++state.counter
  });
};

var Hello = function Hello(props) {
  var classes = [props.className, 'hello-world'].join(' ');
  var itemStyle = Object.assign({ background: state.background }, style);
  return createElement(
    'div',
    { className: classes,
      style: itemStyle,
      dataFoo: 'fooboo' },
    createElement(
      'h1',
      null,
      createElement(
        'span',
        { className: 'hello',
          dataSomething: 'something',
          dataSomethingElse: 'something else',
          dataFooBarBaz: 'booboobaafoo' },
        props.greeting,
        ' '
      ),
      createElement(
        'span',
        { className: _hello2.default.world },
        props.name
      )
    ),
    createElement(
      'p',
      null,
      state.counter
    ),
    toggle(state.counter),
    createElement('br', null),
    createElement(
      'label',
      null,
      createElement(
        'span',
        null,
        'Name: '
      ),
      createElement('input', { type: 'text', value: state.name, onInput: changeName })
    ),
    createElement(
      'p',
      null,
      createElement(
        'button',
        { onClick: changeBackground },
        'Change Background'
      )
    ),
    createElement('br', null)
  );
};

var App = function () {
  function App(props) {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var classes = ['counter' + state.counter, 'High-world'].join(' ');
      return createElement(Hello, { greeting: state.greeting, name: state.name, className: classes });
    }
  }]);

  return App;
}();

render(createElement(App, null), document.getElementById('app'));

