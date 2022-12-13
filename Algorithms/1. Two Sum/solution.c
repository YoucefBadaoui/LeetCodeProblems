// Runtime: 10 ms
// Memory: 6.4 MB

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
    int *result = (int *)malloc(2 * sizeof(int));
    *returnSize = 2;

    int i, j;

    for (i = 0; i < numsSize; ++i)
    {
        for (j = i + 1; j < numsSize; ++j)
        {
            if (nums[i] + nums[j] == target)
            {
                result[0] = i;
                result[1] = j;
                return result;
            }
            else if (nums[numsSize - 1 - i] + nums[numsSize - 1 - j] == target)
            {
                result[0] = (numsSize - 1 - i);
                result[1] = (numsSize - 1 - j);
                return result;
            }
        }
    }

    return result;
}