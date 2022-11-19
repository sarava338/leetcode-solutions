const LCP = require('./longest-common-prefix.js')

describe ('Longest Common Prefix Tests',()=>{

 test("['hi','hello','hell'] should return 'h'",()=>{
  let result = LCP.longestCommonPrefix(['hi', 'hello', 'hell'])
  expect(result).toBe('h')
 })


})