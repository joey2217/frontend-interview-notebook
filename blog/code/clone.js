/**
 * 判断类型
 * @param {any} target 
 */
const checkType = (target) => Object.prototype.toString.call(target).slice(8, -1)
// 浅拷贝
const shallowClone = (target) => {
  let result;
  const targetType = checkType(target);

  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = [];
  } else {
    return target;
  }

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = target[key];
    }
  }
  return result;
}
let target = {
  a: 1,
  b: ['3', 3],
  c: {
    d: 1,
    e: 2
  }
}

let sClone = shallowClone(target)
console.log(sClone);
target.c.d = 2;
console.log(target);
console.log(sClone);
// 深拷贝
const deepClone = (target) => {
  let result;
  const targetType = checkType(target);
  if (targetType === 'Object') {
    result = {};
  } else if (targetType === 'Array') {
    result = []
  } else {
    return target;
  }

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      const value = target[key];
      if (checkType(value) === 'Object' || checkType(value) === 'Array') {
        result[key] = deepClone(value);
      } else {
        result[key] = value
      }
    }
  }
  return result;
}

let dClone = deepClone(target)
target.b.push(6)
console.log(target);
console.log(dClone);