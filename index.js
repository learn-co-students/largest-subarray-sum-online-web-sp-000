function largestSubarraySum(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];

    for (let i = 1; i < arr.length; i++) {

        currentMax = Math.max(arr[i], arr[i] + currentMax);

        if (currentMax > globalMax) {globalMax = currentMax};
    }

    return globalMax;
}
