function euc_dist(v1, v2) {
    let distance = 0;
    for (let i = 0; i < v1.length; i++) {       //Without array function
        distance += (v1[i] - v2[i]) *
            (v1[i] - v2[i]);
    }
    return Math.sqrt(distance);
}

function createUMatrix(rows, cols, map) {
    let u_matrix = new Array(rows);
    let outVec = new Array();

    for (let i = 0; i < rows; i++) {
        u_matrix[i] = new Array(cols);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            v = map[i][j];
            sum_dists = 0.0; ct = 0

            if (i - 1 >= 0) {
                sum_dists += euc_dist(v, map[i - 1][j]);
                ct += 1;
            }
            if (i + 1 <= rows - 1) {
                sum_dists += euc_dist(v, map[i + 1][j]);
                ct += 1;
            }
            if (j - 1 >= 0) {
                sum_dists += euc_dist(v, map[i][j - 1])
                ct += 1;
            }
            if (j + 1 <= cols - 1) {
                sum_dists += euc_dist(v, map[i][j + 1]);
                ct += 1;
            }
            // u_matrix[i][j] = sum_dists / ct
            outVec.push(sum_dists / ct)
        }
    }
    return outVec;
}
