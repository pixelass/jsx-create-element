/** @jsx createElement */
import jsx from '../../src/'
import styles from './hello.css'

const {createElement, render} = jsx

const style = {
  height: 100,
  width: '50%',
  opacity: 0.3,
  zIndex: 12,
  boxShadow: '0 0 2px 1px red'
}

const Hello = (props) => {
  return (
    <div className='hello-world' style={style}>
      <span className='hello'>{props.greeting}</span>&nbsp;
      <span className={styles.world}>{props.name}</span>
    </div>
  )
}

class High {
  constructor(props) {
    this.props = props
  }
  render(){
    return <Hello greeting='High' name='World'/>
  }
}

render(<High name='World'/>, document.body)
