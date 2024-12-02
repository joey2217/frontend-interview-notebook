function deepClone(obj: object) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  let clone =  Object.create(obj.constructor)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
