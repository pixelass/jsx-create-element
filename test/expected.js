'use strict';

/** @jsx jsx.createElement */
var foo = jsx.createElement(
  'div',
  { className: 'foobar' },
  jsx.createElement(
    'span',
    { className: 'foo' },
    'Foo'
  ),
  jsx.createElement(
    'span',
    { className: 'foo' },
    'bar'
  )
);

