function cuttingRope(n: number): number {
  if (n <= 3) {
    return n - 1
  }
  let a = Math.floor(n / 3)
  let b = n % 3
  if (b === 0) {
    return Math.floor(Math.pow(3, a))
  }
  if (b === 1) {
    return Math.floor(Math.pow(3, a - 1) * 4)
  }
  return Math.floor(Math.pow(3, a) * 2)
}

console.log(cuttingRope(1))
