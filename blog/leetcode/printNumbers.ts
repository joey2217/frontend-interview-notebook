function printNumbers(n: number): number[] {
    if (n<=0) {
        return []
    }
    const maxArr = Array(n).fill(9)
    const max = Number(maxArr.join(''))
    return Array(max).fill(0).map((_,i)=>i+1)
};