import HTML_TAGS from './maps/html-tags'
import EVENT_HANDLERS from './maps/event-handlers'
import transformStyle from './transformers/style'
import getNode from './getters/node'
import getAttrs from './getters/attrs'
import getEventHandlers from './getters/event-handlers'

let STATE = {}

/**
 * render content inside an element
 * @param  {DOMNode} content - HTML content to render
 * @param  {DOMNode} target - target element
 */
const renderWithState = (content, state = {}, target) => {
  const type = typeof content
  if (type !== 'object') {
    return
  }
  const {nodeType, tagType, childNodes, dataSet} = content
  const nodeContent = do {
    if ('content' in content) {
      content.content
    } else {
      tagType
    }
  }


  const node = do {
    if (state.node &&
        state.tagType === tagType &&
        state.nodeType === nodeType) {
      state.node
    } else {
      document[`create${nodeType}`](nodeContent)
    }
  }

  if (nodeType === 'Element') {
    const attrs = content.attributes
    Object.keys(attrs).forEach(attr=>{
      node.setAttribute(attr, attrs[attr])
    })
    Object.keys(dataSet).forEach(set=>{
      node.setAttribute(set, dataSet[set])
    })
    const {eventListeners} = content
    if (!state.node || state.tagType !== tagType) {
      const oldListeners = state.eventListeners || {}
      Object.keys(oldListeners).forEach(listener => {
        state.node.removeEventListener(listener, oldListeners[listener])
      })
      Object.keys(eventListeners).forEach(listener=>{
        node.addEventListener(listener, eventListeners[listener])
      })
    }
    const {style} = content
    //node.setAttribute('style','')
    //Object.assign(node.style,style)
    Object.keys(style).forEach(prop => {
      if ('style' in state) {
        const oldStyle = state.style
        if (oldStyle[prop] !== style[prop]) {
          node.style[prop] = style[prop]
        }
      } else {
        node.style[prop] = style[prop]
      }
    })
  } else if (nodeType === 'TextNode') {
    if (state.content !== nodeContent) {
      node.textContent = nodeContent
    }
  }

  if (childNodes) {
    const oldState = state.childNodes || {}
    Object.keys(childNodes).forEach(child => {
      const childState = oldState[child] || {}
      content.childNodes[child] = renderWithState(childNodes[child], childState, node)
    })
  }

  const containsNonEl = nodeType !== 'Element' || state.nodeType !== 'Element'
  if (!state.node ||
      target !== state.node.parentNode ||
      containsNonEl) {
    target.appendChild(node)
  } else if (state.tagType !== tagType ||
             state.nodeType !== nodeType) {
    target.insertBefore(node,state.node)
    state.node.remove()
  }

  content.node = node
  return content
}

const render = (content, target) => {
  STATE = renderWithState(content, STATE, target)
}

/**
 * create an element and assign attributes and handlers
 * also appends children
 * @param  {String} tagName - defines which tagType to render
 * @param  {Object} [props] - a list of properties containing attributes and eventlisteners
 * @param  {...[DOMNode]} children - a collection of children to append
 * @return {DOMNode} returns an HTML element
 */
const createElement = (tagName, properties = {}, ...children) => {
  // make sure props is an object
  const props = properties || {}
  const type = typeof tagName
  const fn = type === 'function'
  const string = type === 'string'
  const struct = fn && 'constructor' in tagName

  if (struct) {
    const component = new tagName(props)
    if ('render' in component) {
      return component.render()
    } else {
      return component
    }
  }

  if (fn) {
    return tagName(props)
  }

  if (!(tagName in HTML_TAGS)) {
    throw new Error(`${tagName} is not a valid tagName`)
  }

  // get the tag.name
  const tag = HTML_TAGS[tagName]
  // tag could be an object
  const tagType = do {
    if (typeof tag === 'object') {
      tag.name
    }
    else {
      tag
    }
  }

  if (!tagType) {
    return null
  }

  // create the element and get attributes
  //const el = document.createElement(tagType)
  const attrs = getAttrs(tag)
  const eventHandlers = getEventHandlers(tag)
  const el = {
    tagType,
    nodeType: 'Element',
    attributes: {},
    dataSet: {},
    style: {},
    eventListeners: {},
    childNodes: {}
  }

  // loop through all props and assign attributes and eventlisteners
  Object.keys(props).forEach(prop => {
    if (prop in attrs) {
      el.attributes[attrs[prop]] = props[prop]
    } else if (prop in eventHandlers) {
      el.eventListeners[eventHandlers[prop]] = props[prop]
    } else {
      const pattern = new RegExp('^data.*')
      const matches = prop.match(pattern)
      if (matches) {
        matches.forEach(match=> {
          const parts = match.split('')
          const hyphenated = parts.map(part => {
            const lowered = part.toLowerCase()
            if (part !== lowered) {
              return `-${lowered}`
            } else {
              return part
            }
          }).join('')
          el.dataSet[hyphenated] = props[prop]
        })
      }
    }
  })

  // if props contains a style object
  // set styles on element
  if ('style' in props) {
    const {style} = props
    Object.keys(style).forEach(prop => {
      el.style[prop] = transformStyle(prop,style[prop])
    })
  }

  // loop through children and append.
  children.forEach((child, i) => {
    const childNode = getNode(child)
    el.childNodes[i] = childNode
  })

  return el
}

const jsx = {
  render,
  createElement
}

export default jsx