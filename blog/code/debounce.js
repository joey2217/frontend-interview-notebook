/**
 * @param {Function} fn The function to debounce.n  
 * @param {Number} wait The number of milliseconds to delay.
 */
 function debounce(fn, wait) {
  if (wait === void 0) { wait = 500; }
  var timer = null;
  return function () {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}
function log(s) {
  console.log(s);
}
var debouncedLog = debounce(log, 1000);
window.addEventListener('resize', function (e) {
  debouncedLog(e);
});


