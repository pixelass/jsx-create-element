const getNode = (content) => {
  if (typeof content === 'object') {
    return content
  } else if (typeof content === 'string') {
    return document.createTextNode(content)
  } else {
    throw new Error(`Expected "object" or "string" but received "${typeof content}"`)
  }
}

export default getNode
