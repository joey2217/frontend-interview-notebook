// function numWays(n: number): number {
//   if (n === 0) {
//     return 1
//   } else if (n === 1 || n === 2) {
//     return n
//   } else {
//     return numWays(n - 2) + numWays(n - 1)
//   }
// }
function numWays(n: number): number {
  let a = 1
  let b = 1
  let sum
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a % 1000000007
} 
