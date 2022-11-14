const Palindrome = {

    isPalindrome: (x) => {

        x = x.toString()
        for (let i = 0; i <= x.length / 2; i++)
            if (x[i] != x[x.length - i - 1])
                return false;
        return true;

        // var r = x.toString().split('').reverse().join('')
        // if (x == r) return true;
        // return false;


        //if (x < 0) return false;
        //if (x > 0 && x < 10) return true;

    }
}
module.exports = Palindrome