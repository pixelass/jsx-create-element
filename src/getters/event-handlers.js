import EVENT_HANDLERS from '../maps/event-handlers'

const getEventHandlers = (tag) => {
  const object = typeof tag === 'object'
  // define local handlers and extend the global handlers
  const localEventHandlers = object ? tag['eventHandlers'] || {} : {}
  return Object.assign({}, EVENT_HANDLERS, localEventHandlers)
}

export default getEventHandlers