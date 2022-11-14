const TwoSum = require('leetcode-solutions/soln/two-sum.js')

describe("two sum tests", () => {

    it('([2,7,11,9],9) should return [0,1]', () => {
        var result = TwoSum.twoSum([2, 7, 11, 9], 9)
        expect(result).toStrictEqual([0,1])
    })

    it('([2,7,11,9],11) should return [0,3]', () => {
        var result = TwoSum.twoSum([2, 7, 11, 9], 9)
        expect(result).toStrictEqual([0, 1])
    })

    it('([2,7,11,9],18) should return [1,2]', () => {
        var result = TwoSum.twoSum([2, 7, 11, 9], 9)
        expect(result).toStrictEqual([0, 1])
    })
})

