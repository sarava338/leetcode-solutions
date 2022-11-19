const LCP = {
longestCommonPrefix : (strs) {
  
  const sort = (a,b) => {
    return 1 ? a>b : -1 ? a<b : 0
  }
  
  strs.sort()
  
  var a = strs[0]
  var b = strs[strs.length-1]
  var res = ''
  
  if(a == b) return a
  
  for(let i=0; a.length; i++)
    if(a[i] == b[i])
      res += a[i]
    else break 
  
  return res
}
}
module.exports = LCP
