// https://leetcode-cn.com/problems/palindrome-permutation-lcci/
function canPermutePalindrome(s: string): boolean {
  const letterMap = new Map();
  for (const l of s) {
    if (letterMap.has(l)) {
      const n = letterMap.get(l);
      letterMap.set(l, n + 1);
    } else {
      letterMap.set(l, 1);
    }
  }
  const countArr = Array.from(letterMap.values());
  if (s.length % 2 === 1) {
    const index = countArr.findIndex((l) => l % 2 === 1);
    if (index !== -1) {
      countArr[index] = 2;
    }
  }
  return countArr.every((l) => l % 2 === 0);
}
