function findRepeatNumber(nums: number[]): number {
  const set = new Set()
  let repeatNumber = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (set.has(num)) {
      repeatNumber = num
      break
    }else{
        set.add(num)
    }  
  }
  return repeatNumber
}

const nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums))
