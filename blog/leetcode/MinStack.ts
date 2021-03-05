class MinStack {
  _list = [];

  constructor() {}

  push(x: number): void {
    this._list.push(x);
  }

  pop(): void {
    this._list.pop();
  }

  top(): number {
    return this._list[this._list.length - 1];
  }

  min(): number {
    return Math.min(...this._list)
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
