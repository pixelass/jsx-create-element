'use strict';

/** @jsx createElement */
var foo = createElement(
  'div',
  { className: 'foobar' },
  createElement(
    'span',
    { className: 'foo' },
    'Foo'
  ),
  createElement(
    'span',
    { className: 'foo' },
    'bar'
  )
);

