// https://leetcode-cn.com/problems/compress-string-lcci/
function compressString(S: string): string {
  let temp = "";
  let count = 0;
  let compress = "";
  for (const l of S) {
    if (temp) {
      if (temp === l) {
        count++;
      } else {
        compress += temp;
        compress += count;
        temp = l;
        count = 1;
      }
    } else {
      temp = l;
      count = 1;
    }
  }
  compress += temp;
  compress += count;
  return compress.length >= S.length ? S : compress;
}
