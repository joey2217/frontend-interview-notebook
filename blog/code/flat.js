/**
 * 
 * @param {Array} arr 
 */
function flat(arr) {
  return arr.reduce((p, c) => {
    if (Array.isArray(c)) {
      return p.concat(flat(c))
    } else {
      return p.concat(c)
    }
  }, [])
}