let largestSubarraySum = (arr) => {
  let largestSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++){
    currSum += arr[i];

    if (currSum <= 0) currSum = null;
    if (currSum > largestSum) largestSum = currSum;
  }

  return largestSum
}
