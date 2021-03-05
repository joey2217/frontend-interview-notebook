// https://leetcode-cn.com/problems/string-rotation-lcci/
function isFlipedString(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  const s = s2+s2
  return s.includes(s1)
}

console.log(isFlipedString('waterbottle','erbottlewat'));
