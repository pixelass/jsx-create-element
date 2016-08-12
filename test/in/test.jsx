/** @jsx createElement */
import jsx from '../../'
import styles from './foobar.css'

const {createElement, render} = jsx

const style = {
  height: 100,
  width: '50%',
  opacity: 0.3,
  zIndex: 12,
  boxShadow: '0 0 2px 1px red'
}

const foo = (
  <div className='foobar' style={style}>
    <span className='foo'>Foo</span>
    <span className={styles.bar}>bar</span>
  </div>
)

render(foo, document.body)