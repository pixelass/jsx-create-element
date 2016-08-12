!function (error) {
  console.error(error);
  if (typeof document === 'undefined') {
    return;
  } else if (!document.body) {
    document.addEventListener('DOMContentLoaded', print);
  } else {
    print();
  }
  function print() {
    var pre = document.createElement('pre');
    pre.className = 'errorify';
    pre.textContent = error.message || error;
    if (document.body.firstChild) {
      document.body.insertBefore(pre, document.body.firstChild);
    } else {
      document.body.appendChild(pre);
    }
  }
}({"message":"/Users/pixelass/Workspace/private/jsx-create-element/src/index.js: Unexpected token (46:5) while parsing file: /Users/pixelass/Workspace/private/jsx-create-element/src/index.js\n\n  44 |   const tagType = object ? tag.name : tag\n  45 | \n> 46 |   if !(tagType) {\n     |      ^\n  47 |     return null\n  48 |   }\n  49 | ","name":"SyntaxError","stack":"SyntaxError: /Users/pixelass/Workspace/private/jsx-create-element/src/index.js: Unexpected token (46:5)\n  44 |   const tagType = object ? tag.name : tag\n  45 | \n> 46 |   if !(tagType) {\n     |      ^\n  47 |     return null\n  48 |   }\n  49 | \n    at Parser.pp.raise (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/location.js:22:13)\n    at Parser.pp.unexpected (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/util.js:89:8)\n    at Parser.pp.expect (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/util.js:83:33)\n    at Parser.pp.parseParenExpression (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/expression.js:557:8)\n    at Parser.pp.parseIfStatement (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/statement.js:313:20)\n    at Parser.pp.parseStatement (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/statement.js:105:19)\n    at Parser.parseStatement (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/plugins/flow.js:30:22)\n    at Parser.pp.parseBlockBody (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/statement.js:529:21)\n    at Parser.pp.parseBlock (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/statement.js:510:8)\n    at Parser.pp.parseFunctionBody (/Users/pixelass/Workspace/private/jsx-create-element/node_modules/babylon/lib/parser/expression.js:927:22)"})