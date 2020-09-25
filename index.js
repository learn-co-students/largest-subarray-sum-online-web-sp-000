function largestSubarraySum(array){
  let temp_max = 0;
  let largest_max = 0;
  for(let i = 0; i < array.length; i++){
    temp_max = Math.max(0, temp_max += array[i]) 
    largest_max = Math.max(largest_max, temp_max)
  }
  return largest_max
 // let first = array.slice(0, 2)
//  let sumo = first.reduce((sum, n) => { sum + n }, 0)
}