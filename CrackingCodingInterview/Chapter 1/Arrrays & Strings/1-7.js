/**Rotate a 2D array clowise 90 degrees in place */
function rotateMatrix(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return matrix;
    let size = matrix.length;
    for (let layer = 0; layer < size / 2; layer++) {
        let first = layer;
        let last = size - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
    return matrix;
}