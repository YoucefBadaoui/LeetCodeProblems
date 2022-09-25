/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {

    const strsLen = strs.length;

    if (strsLen === 0) return "";

    for (let i = 0; i <= strs[0].length; i++) {

        for (let j = 1; j < strsLen; j++) {

            if (strs[0][i] !== strs[j][i]) {

                return strs[0].slice(0, i);
            }
        }

    }

    return strs[0];

};