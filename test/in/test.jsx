/** @jsx createElement */
import jsx from '../../src/'
import styles from './hello.css'

const {createElement, render} = jsx



const toggle = (c) => {
  if (c % 2 < 1) {
    return (
      <fieldset>
        <label><span>Greeting: </span>
          <input type='text' value={state.greeting} onChange={changeGreeting}/>
        </label>
        <button onClick={handleClick}>Change</button>
      </fieldset>
    )
  } else {
    return <div><button onClick={handleClick}>Change Greeting</button></div>
  }
}

const names = [
  'World',
  'Everybody',
  'Bro',
]

const greetings = [
  'Hi',
  'Hello',
  'Yo',
]

const rnd = (n) => ~~(Math.random() * n)
const rndItem = arr => arr[rnd(arr.length)]


const style = {
  width: '50%',
  zIndex: 12,
  margin: '50px auto',
  padding: 10,
  color: '#fff',
  borderRadius: 5,
  fontFamily: 'sans-serif',
  boxShadow: '0 2px 4px 0 #000'
}


const setState = (newState) => {
  Object.assign(state,newState)
  render(<App/>, document.getElementById('app'))
}

const state = {
  counter: 0,
  name: rndItem(names),
  greeting: rndItem(greetings),
  background: `#${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}`
}

const changeGreeting = (e) => {
  console.log('greet')
  setState({
    greeting: e.target.value
  })
}

const changeBackground = e => {
  e.preventDefault();
  setState({
    background: `#${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}${rnd(9)}`
  })
}

const changeName = (e) => {
  console.log('name')
  setState({
    name: e.target.value
  })
}

const handleClick = (e) => {
  console.log('count')
  e.preventDefault();
  setState({
    counter: ++state.counter
  })
}

const Hello = (props) => {
  const classes = [props.className, 'hello-world'].join(' ')
  const itemStyle = Object.assign({background: state.background},style)
  return (
    <div className={classes}
         style={itemStyle}
         dataFoo='fooboo'>
      <h1><span className='hello'
            dataSomething='something'
            dataSomethingElse='something else'
            dataFooBarBaz='booboobaafoo'>{props.greeting} </span>
        <span className={styles.world}>{props.name}</span>
      </h1>
      <p>{state.counter}</p>
      {toggle(state.counter)}
      <br/>
      <label><span>Name: </span>
        <input type='text' value={state.name} onInput={changeName}/>
      </label>
      <p>
        <button onClick={changeBackground}>Change Background</button>
      </p>
      <br/>
    </div>
  )
}

class App {
  constructor(props) {
  }
  render(){
    const classes = [`counter${state.counter}`, 'High-world'].join(' ')
    return <Hello greeting={state.greeting} name={state.name} className={classes}/>
  }
}

render(<App/>, document.getElementById('app'))
