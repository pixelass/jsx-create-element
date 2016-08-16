const getNode = (content) => {
  const type = typeof content
  if (type === 'object') {
    return Object.assign(content,{nodeType: 'Element'})
  } else if (type === 'string' || type === 'number') {
    return {nodeType: 'TextNode', content}
  } else {
    return
  }
}

export default getNode
