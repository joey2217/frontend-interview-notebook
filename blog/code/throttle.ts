function throttle(fn:Function,delay=500){
  let canRun = true
  return (...args)=>{
    if (!canRun) {
      return;
    }
    canRun = false
    setTimeout(()=>{
      fn.apply(this,args)
      canRun=true
    },delay)
  }
}