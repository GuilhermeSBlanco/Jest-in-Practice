// método some recursivo
function some (array, callback) {
  return (function internalSome (internalArray, counter) {
    const [head, ...tail] = internalArray
    return internalArray.length === 0 
    ? false
    : callback(head, counter, array) ? true : internalSome(tail, counter + 1)
  })(array, 0)

}

export default some