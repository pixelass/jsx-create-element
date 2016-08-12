import HTML_TAGS from './html-tags'
import GLOBAL_ATTRIBUTES from './global-attributes'
import EVENT_HANDLERS from './event-handlers'
import CSS_PROPERTIES from './css-properties'

/**
 * render content inside an element
 * @param  {DOMNode} content - HTML content to render
 * @param  {DOMNode} target - target element
 */
const render = (content, target) => {
  // append content to target
  target.appendChild(content)
}

/**
 * create an element and assign attributes and handlers
 * also appends childNodes
 * @param  {String} tagName - defines which tagType to render
 * @param  {Object} [props] - a list of properties containing attributes and eventlisteners
 * @param  {...[DOMNode]} childNodes - a collection of childNodes to append
 * @return {DOMNode} returns an HTML element
 */
const createElement = (tagName, properties = {}, ...childNodes) => {
  // make sure props is an object
  const props = properties || {}

  if (!(tagName in HTML_TAGS)) {
    return
  }
  // get the tagname
  const tag = HTML_TAGS[tagName]
  // tag could be an object
  // use a flag to check when needed
  const object = typeof tag === 'object'
  // define local attributes and extend the global attributes
  const localAttrs = object ? tag.attributes || {} : {}
  const attrs = Object.assign({}, GLOBAL_ATTRIBUTES, localAttrs)
  const tagType = object ? tag.name : tag

  // create the element
  const el = document.createElement(tagType)

  // loop through all props and assign attributes and eventlisteners
  Object.keys(props).forEach(prop => {
    if (prop in attrs) {
      el.setAttribute(attrs[prop], props[prop])
    } else if (prop in EVENT_HANDLERS) {
      el.addEventListener(EVENT_HANDLERS[prop], props[prop])
    }
  })

  // if props contains a style object
  // set styles on element
  if ('style' in props) {
    const styles = props.style

    Object.keys(styles).forEach(prop => {
      const value = styles[prop]
      // make numbers default to px
      if (typeof value === 'number') {
        const cssProp = CSS_PROPERTIES[prop]
        if (cssProp && 'unit' in cssProp) {
          el.style[prop] = `${value}${cssProp.unit}`
        } else {
          el.style[prop] = value
        }
      } else if (typeof value === 'string') {
        el.style[prop] = value
      } else {
        throw new Error(`Expected "number" or "string" but received "${typeof value}"`)
      }
    })
  }

  // loop through childNodes and append.
  // if string create a textNode
  childNodes.forEach(childNode => {

    if (typeof childNode === 'object') {
      el.appendChild(childNode)
    } else if (typeof childNode === 'string') {
      el.appendChild(document.createTextNode(childNode))
    } else {
      throw new Error(`Expected "object" or "string" but received "${typeof value}"`)
    }
  })

  return el
}

export default {
  render,
  createElement
}