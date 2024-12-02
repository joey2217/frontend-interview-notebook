/**
 * @param {Function} fn 
 * @param {Number} delay 
 */
function throttle(fn, delay = 500) {
  let timer = null;
  let previous = Date.now();
  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - previous); //距离规定时间,还剩多少时间
    clearTimeout(timer);  //清除之前设置的定时器
    if (remaining <= 0) {
      fn.apply(this, args);
      previous = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, remaining); //因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
    }
  }
}
function log(s) {
  console.log(s);
}
var throttledLog = throttle(log, 2000);
window.addEventListener('scroll', function (e) {
  throttledLog(e);
});