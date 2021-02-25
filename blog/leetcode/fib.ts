function fib(n: number): number {
    if (n === 0 || n === 1) {
        return n
    } else {
        let n1:bigint = 0;  // n-2
        let n2:bigint = 1;  // n-1
        for (let i = 2; i <= n; i++) {
            let t = n1
            n1 = n2
            n2 = t + n2
        }
        return n2;
    }
}

console.log(fib(45));
