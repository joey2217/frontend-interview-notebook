function sum(n: number): number {
  let count = 0
  while (n > 0) {
    count += n % 10
    n = Math.floor(n / 10)
  }
  return count
}

function movingCount(m: number, n: number, k: number): number {
  let count = 0
  let set = new Set()
  function canWalk(i: number, j: number) {
    let p = [i, j].join()
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      set.has(p) ||
      sum(i) + sum(j) > k
    ) {
      return
    }
    count++
    set.add(p)
    canWalk(i - 1, j)
    canWalk(i + 1, j)
    canWalk(i, j - 1)
    canWalk(i, j + 1)
  }
  canWalk(0,0)
  return count
}
