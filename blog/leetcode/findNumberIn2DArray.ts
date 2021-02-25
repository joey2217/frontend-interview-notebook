function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix) {
    return false
  }
  const rows = matrix.length
  if (rows === 0) {
    return false
  }
  const columns = matrix[0].length
  if (columns === 0) {
    return false
  }
  let row = 0
  let column = columns - 1
  while (row < rows && column >= 0) {
    const num = matrix[row][column]
    if (num === target) {
      return true
    } else if (num < target) {
      row++
    } else {
      column--
    }
  }
  return false
}

const m = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

console.log(findNumberIn2DArray(m, 5))
