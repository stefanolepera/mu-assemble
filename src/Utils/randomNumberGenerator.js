export const getRandomIndexes = (totalIndexes, playersCount = 2) => {
    const nums = new Set();
    while(nums.size !== playersCount) {
        nums.add(Math.floor(Math.random() * totalIndexes));
    }

    return nums;
};