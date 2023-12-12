function generate(rowIndex) {
  let numRows = 34;
  let triangle = [[1]];

  for (let row = 1; row < numRows; row++) {
    triangle[row] = [];
    triangle[row][0] = 1;
    triangle[row][row] = 1;
    for (let col = 1; col < row; col++) {
      triangle[row][col] = triangle[row - 1][col] + triangle[row - 1][col - 1];
    }
    
  }
  console.log(triangle[rowIndex]);
  return triangle[rowIndex];
}

generate(32);