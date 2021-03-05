// https://leetcode-cn.com/problems/check-permutation-lcci/
function CheckPermutation(s1: string, s2: string): boolean {
  const countMap = new Map();
  for (const l of s1) {
    if (countMap.has(l)) {
      const n = countMap.get(l);
      countMap.set(l, n + 1);
    } else {
      countMap.set(l, 1);
    }
  }
  let flag = true;
  for (const l of s2) {
    if (countMap.has(l)) {
      const n = countMap.get(l);
      const count = n - 1;
      if (count >= 0) {
        countMap.set(l, count);
      } else {
        flag = false;
        break;
      }
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}
