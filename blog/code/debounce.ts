function debounce(fn: Function, wait = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}