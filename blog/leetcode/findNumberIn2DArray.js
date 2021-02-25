function findNumberIn2DArray(matrix, target) {
    var rows = matrix.length;
    var columns = matrix[0].length;
    if (!matrix || rows === 0 || columns === 0) {
        return false;
    }
    var row = 0;
    var column = columns - 1;
    while (row < rows && column >= 0) {
        var num = matrix[row][column];
        if (num === target) {
            return true;
        }
        else if (num < target) {
            row++;
        }
        else {
            column--;
        }
    }
    return false;
}
var m = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
];
console.log(findNumberIn2DArray(m, 5));
