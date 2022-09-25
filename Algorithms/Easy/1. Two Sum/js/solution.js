/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (numObj.hasOwnProperty(nums[i])) {
            return [numObj[nums[i]], i];
        }
        numObj[target - nums[i]] = i;
    }

};