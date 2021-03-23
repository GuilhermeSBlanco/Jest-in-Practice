// método map recursivo
function filter (array = [], callback = () => {}) {
  return (function internalFilter (internalArray, counter) {
    const [head, ...tail] = internalArray
    return internalArray.length === 0 
      ? [] 
      : (callback(head, counter, array) ? [head, ].concat(internalFilter(tail, counter + 1)) : [].concat(internalFilter(tail, counter + 1)))
  })(array, 0)
}

export default filter