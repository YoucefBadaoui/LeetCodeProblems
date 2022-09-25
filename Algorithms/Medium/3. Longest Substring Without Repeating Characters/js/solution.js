/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {

    let resultString = [];
    let resultLength = 0;

    for (let i = 0; i < s.length; i++) {
        const charPos = resultString.indexOf(s[i]);

        if (charPos !== -1) {
            resultString.splice(0, charPos + 1);
        }

        resultString.push(s[i]);

        resultLength = Math.max(resultLength, resultString.length);
    }

    return resultLength;
    
};