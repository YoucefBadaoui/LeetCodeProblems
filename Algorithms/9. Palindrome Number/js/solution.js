/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {

    if (x == 0) return true;
    else if( x < 0 || x % 10 == 0) return false;

    let num = x;

    let reverse = 0;

    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return reverse === x;

};