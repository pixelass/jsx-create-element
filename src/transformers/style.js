import CSS_PROPERTIES from '../maps/css-properties'

const transformStyle = (prop, value) => {
  // make numbers default to px
  if (typeof value === 'number') {
    const cssProp = CSS_PROPERTIES[prop]
    if (cssProp && 'unit' in cssProp) {
      return `${value}${cssProp.unit}`
    } else {
      return value
    }
  } else if (typeof value === 'string') {
    return value
  } else {
    throw new Error(`Expected "number" or "string" but received "${typeof value}"`)
  }
}

export default transformStyle
