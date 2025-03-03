/**Implement a zero matrix: if an element is 0, its entire row and column would be 0*/
function zeroMatrix(matrix) {
    let rows = new Set();
    let cols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let row of rows) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
    }
    for (let col of cols) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }
    return matrix;
}

/**A more space efficient solution. Using first row and column as a bit vector for 0 rows & cols*/
function efficientZeroMatrix(matrix) {
    let firstRowZero = false;
    let firstColZero = false;
    //Check if first row has a 0
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    //Check if first column has a 0
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    //Check for 0s in the rest of the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;;
            }
        }
    }
    const setZeroRow = (row) => {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[row][i] = 0;
        }
    }
    const setZeroCol = (col) => {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][col] = 0;
        }
    }
    //Set 0s for 0 rows
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            setZeroRow(i);
        }
    }
    //Set 0s for 0 cols
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            setZeroCol(j);
        }
    }
    //Check first row & set to zero if needed
    if (firstRowZero) setZeroRow(0);
    //Check first col & set to zero if needed
    if (firstColZero) setZeroCol(0);
    return matrix;
}