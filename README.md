# jsx-create-element


```shell
npm install --save-dev jsx-create-element
```

```js
import jsx from 'jsx-create-element'

const className = 'foobar'

const hello = name => (
  <div className={className}>
    <h1>Hello <span>{name}</span></h1>
  </div>
)

jsx.render(hello('World'), document.body)
```