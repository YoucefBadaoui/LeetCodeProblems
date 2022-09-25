/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    
    const romanNums = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    const sLength = s.length;
    let result = 0;
    
    for (let i = 0; i < sLength; i++) {
        
        if (romanNums[s[i]] < romanNums[s[i+1]]) {
            result -= romanNums[s[i]];
        } else {
            result += romanNums[s[i]];
        }

    }
    
    return result;
};