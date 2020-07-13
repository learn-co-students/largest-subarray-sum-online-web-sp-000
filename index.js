function largestSubarraySum(array)
{
  console.log(array)
  let largestArray = [];
  let currentTotal = sum(array)

  let firstRemoved = removeFirst(array)
  let firstSum = sum(firstRemoved)
  let lastRemoved = removeLast(array)
  let lastSum = sum(lastRemoved)

  
  let firstTwoRemoved = removeFirst(firstRemoved)
  let lastTwoRemoved = removeLast(lastRemoved)
  
  if(firstRemoved.length > 0)
  {
    if(firstSum > currentTotal)
    {
      return largestSubarraySum(firstRemoved)
    }
    else if(sum(firstTwoRemoved) > currentTotal)
    {
      return largestSubarraySum(firstTwoRemoved)
    }
  }
 
 
  if(lastRemoved.length > 0)
  {
    if(lastSum > currentTotal)
    {
      return largestSubarraySum(lastRemoved)
    }
    else if(sum(lastTwoRemoved) > currentTotal)
    {
      return largestSubarraySum(lastTwoRemoved)
    }
  }
  
  if(sum(largestArray) > currentTotal)
  {
    return sum(largestArray)
  }
  return currentTotal
}

function sum(array)
{
  let sum = 0;
  for(let i = 0; i < array.length; i++)
  {
    sum = sum + array[i]
  }
  return sum
}

function removeLast(array)
{
  return array.slice(0, -1)
}

function removeFirst(array)
{
  return array.slice(1)
}