const RectangleArea = require('./rectangle-area.js')

describe("Rectangle Area Tests", () => {

    it('([-3, 0, 3, 4, 0, -1, 9, 2]) should return 45', () => {
        var result = RectangleArea.rectangleArea([-3, 0, 3, 4, 0, -1, 9, 2])
        expect(result).toBe(45)
    })

    it('([-2, -2, 2, 2, -2, -2, 2, 2]) should return 16', () => {
        var result = RectangleArea.rectangleArea([-2, -2, 2, 2, -2, -2, 2, 2])
        expect(result).toBe(16)
    })
})

