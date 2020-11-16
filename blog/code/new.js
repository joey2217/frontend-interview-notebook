/**
 * 手写New
 * @param {function} func 
 * @param  {...any} args 
 */
function myNew(func, ...args) {
  // 1.判断方法体
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体';
  }
  // 2.创建新对象
  const obj = Object.create(func.prototype);
  // 3. 通过 apply 绑定 this 执行并且获取运行后的结果
  const result = func.apply(obj, args);
  // 4. 如果构造函数返回的结果是引用数据类型，则返回运行后的结果,否则返回新创建的 obj
  const isObject = typeof result === 'object' && result !== null;
  const isFunction = typeof result === 'function';
  return (isObject || isFunction) ? result : obj;
}