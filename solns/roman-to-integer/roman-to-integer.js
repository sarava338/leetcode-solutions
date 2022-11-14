const RomanToInteger = {
    romanToInt: (s) => {
        var num = 0
        function findNum(s) {
            switch (s) {
                case 'I': num += 1; break;
                case 'V': num += 5; break;
                case 'X': num += 10; break;
                case 'L': num += 50; break;
                case 'C': num += 100; break;
                case 'D': num += 500; break;
                case 'M': num += 1000; break;
                case 'IV': num += 4 - 6; break;
                case 'IX': num += 9 - 11; break;
                case 'XL': num += 40 - 60; break;
                case 'XC': num += 90 - 110; break;
                case 'CD': num += 400 - 600; break;
                case 'CM': num += 900 - 1100; break;
            }
        }
        for (let i = s.length; i >= 0; i--) {

            let ce = s[i] //currentElement
            let ne = s[i + 1] //nextElement 
            let pe = s[i - 1] //previousElement 

            if (pe && pe + ce
                == 'IV' || 'IX'
                || 'XL' || 'XC'
                || 'CD' || 'CM'
            )
                findNum(pe + ce)
            findNum(ce)
        }
        return num
    }
}
module.export = RomanToInteger
