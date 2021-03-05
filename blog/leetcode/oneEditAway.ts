// https://leetcode-cn.com/problems/one-away-lcci/
function oneEditAway(first: string, second: string): boolean {
  const l1 = first.length;
  const l2 = second.length;
  if (l1 === l2) {
    let n = 0;
    for (let i = 0; i < l1; i++) {
      if (first[i] !== screen[i]) {
        n++;
      }
      if (n > 1) {
        return false;
      }
    }
    return true;
  } else if (l1 - l2 === 1 || l1 - l2 === -1) {
    let l = 0;
    let r = 0;
    let n = 0;
    if (l1 > l2) {
      const t = first;
      first = second;
      second = t;
    }
    while (l < l1 && r < l2) {
      if (first[l] === second[r]) {
        l++;
        r++;
      } else {
        n++;
        r++;
      }
      if (n > 1) return false;
    }
    return true;
  } else {
    return false;
  }
}
