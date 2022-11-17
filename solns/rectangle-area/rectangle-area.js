const RectangleArea = {
    rectangleArea: (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {

        a = (ax2 - ax1) * (ay2 - ay1)
        b = (bx2 - bx1) * (by2 - by1)

        abx = Math.min(ax2, bx2) - Math.max(ax1, bx1)
        aby = Math.min(ay2, by2) - Math.max(ay1, by1)

        if (abx > 0 && aby > 0) return Number(a + b - (abx * aby))
        else return Number(a + b)
    }
}
module.exports = RectangleArea