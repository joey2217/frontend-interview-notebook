// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    let last = stack[stack.length - 1];
    while (!isNaN(last) && popped[j] === last) {
      stack.pop();
      j++;
      last = stack[stack.length - 1];
    }
  }
  return !stack.length;
}

validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
