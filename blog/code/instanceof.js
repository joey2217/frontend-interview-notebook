function instanceOf(a, b) {
  if (typeof a !== 'object' || b === null) {
    return false
  }
  let photo = Object.getPrototypeOf(a)
  const prototype = b.prototype
  while (photo) {
    if (photo === prototype) {
      return true
    }
    photo = photo.__photo__;
  }
  return false;
} 