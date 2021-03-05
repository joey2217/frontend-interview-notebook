// https://leetcode-cn.com/problems/is-unique-lcci/
function isUnique(astr: string): boolean {
  const set = new Set();
  let flag = true;
  astr.split("").forEach((l) => {
    if (set.has(l)) {
      flag = false;
    } else {
      set.add(l);
    }
  });
  return flag;
}
