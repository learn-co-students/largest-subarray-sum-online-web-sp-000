function largestSubarraySum(arr){
    let largestSum = 0
    let currentSum = 0
    let negatives = 0
    let i = 0

    /*
    Using a While loop instead of a For loop makes it easy to check more than one element in
    the array without returning to the top of the loop.  Helpful when implementing a solution in O(n)
    time.
    */
    while(i < arr.length){
        // This inner while loop handles cases where the array starts with negative numbers
        while(arr[i]<0){
            i++
        }
        // the next six lines move the summation process forward as long as the elements are positive
        currentSum += arr[i]
        i++
        while(arr[i] && arr[i] > 0){
            currentSum += arr[i]
            i++
        }
        /*
        This if statement ensures that the sum of positive subarrays preceded by negatives are stored, and potentially
        returned as the answer, in the event that the sum of the positive subarray that follows the negative(s) is less than
        the absolute value of the negative sequence.
        */
        if(arr[i] < 0 || i === arr.length){
            largestSum = Math.max(largestSum, currentSum)
        }
        //this while loop stores the sum of subarrays of negative numbers
        while(arr[i] < 0){
            negatives += arr[i]
            i++
        }
        /*
        If the absolute value of the negative subarray is larger the its preceding positive subarray.  Disregard
        the preceding positive subarray.
        */
        if(Math.abs(negatives) >= currentSum){
            currentSum = 0
            negatives = 0
        } else {
            currentSum = currentSum + negatives
            negatives = 0
        }
    }
    return largestSum
}
