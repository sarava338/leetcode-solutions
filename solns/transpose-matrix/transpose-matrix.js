const TransposeMatrix = {
    transpose: matrix => {
        var r = []

        for (let i = 0; i < matrix[0].length; i++) {
            let c = []
            for (let j = 0; j < matrix.length; j++)
                c.push(matrix[j][i])
            r.push(c)
        }
        return r
    }
}
module.export = TransposeMatrix