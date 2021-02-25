// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

function exchange(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let temp;
  while (left < right) {
    if (nums[left] % 2 === 1) {
      left++;
      continue;
    }
    if (nums[right] % 2 === 0) {
      right--;
      continue;
    }
    temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
  return nums
}

function exchange2(nums: number[]): number[] {
  const res = [];
  nums.forEach((n) => {
    if (n % 2 === 0) {
      res.push(n);
    } else {
      res.unshift(n);
    }
  });
  return res;
}

