import GLOBAL_ATTRIBUTES from '../maps/global-attributes'

const getAttrs = (tag) => {
  const object = typeof tag === 'object'
  // define local attributes and extend the global attributes
  const localAttrs = object ? tag['attributes'] || {} : {}
  return Object.assign({}, GLOBAL_ATTRIBUTES, localAttrs)
}

export default getAttrs
