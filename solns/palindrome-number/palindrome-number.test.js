const Palindrome = require("./palindrome-number.js")

describe('palindrome numbers test', () => {

    it('12321 should return true', () => {
        var result = Palindrome.isPalindrome(12321)
        expect(result).toBe(true)
    }) 

    it('12332 should return true', () => {
        var result = Palindrome.isPalindrome(12332)
        expect(result).toBe(false)
    }) 
})