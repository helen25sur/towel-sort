
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const newArr = [];
    if (arguments.length === 0 || matrix.length === 0) {
        return newArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            for (let j = matrix[i].length-1; j >= 0; j--) {
                newArr.push(matrix[i][j]);
            }
        } else {
            for (let j = 0; j < matrix[i].length; j++) {
                newArr.push(matrix[i][j]);
            }
        }
    }
   
  return newArr;
}
