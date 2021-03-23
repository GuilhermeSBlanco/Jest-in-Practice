// método every recursivo
function every (array, callback) {
  return (function internalEvery(internalArray, counter){
    const [head, ...tail] = internalArray
    return internalArray.length === 0 
     ? true
     : callback(head, counter, array) ? internalEvery(tail, counter + 1) : false
})(array, 0)

}

export default every