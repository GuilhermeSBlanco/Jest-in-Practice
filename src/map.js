// método map recursivo
function map (array = [], callback = () => {}) {
  let counter = 0

  return (function mapInternal (internalArray, counter) {
    const [head, ...tail] = internalArray
    
    return internalArray.length == 0 ? [] : [ 
      callback(head, counter, array), 
      ...mapInternal(tail, counter + 1) 
    ]
  })(array, 0)
}

export default map