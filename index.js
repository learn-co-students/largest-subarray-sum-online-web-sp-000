// function largestSubarraySum(array){
//   let i = 0;
//   let j = i;
//
//   let largest;// = array[0];
//   let negatives = array.filter(x => x < 0);
//   const summer = (accumulator, current) => accumulator + current;
//
//   if (array.length === negatives.length)
//     return Math.max(...negatives);
//   if (negatives.length === 0)
//     return array.reduce(summer);
//
//   while (i < array.length){
//     const result = array.slice(i, j + 1).reduce(summer);
//
//     if (result > largest || typeof largest === 'undefined')
//       largest = result;
//
//     j++;
//     if (j === array.length){
//       i++;
//       j = i;
//     }
//   }
//   return largest;
// }

function largestSubarraySum(array){
  // array indexes
  let i = 0;
  let j = array.length - 1;
  let negatives = array.filter(x => x < 0);
  // groups indexes
  let k = 0;
  let l = 0;

  let groups = [[]];
  let groups2 = [[]];

  if (array.length === negatives.length)
    return Math.max(...negatives);

  while (true){
    if (array[0] < 0)
      array.shift();
    if (array[array.length - 1] < 0)
      array.pop();
    if ((array[0] >= 0 && array[array.length - 1] >= 0) || array.length === 0)
      break;
  }
  while (i < array.length || j > -1){
    let value1 = array[i];
    let value2 = array[j];
    // 1,2,-1,3

    if (value1 > 0) {
      groups[k].push(value1);
    } else if (value1 < 0){
      groups.push([...groups[k]]);
      k++;
      groups[k].push(value1);
    }
    i++;

    if (value2 > 0) {
      groups2[l].push(value2);
    } else if (value2 < 0){
        groups2.push([...groups2[l]]);
        l++;
        groups2[l].push(value2);
    }
    j--;
  }

  // console.log('groups', groups);
  // console.log('groups2', groups2);
  const sum = (a, c) => a + c;
  const sums = [];

  getSums(groups, sum, sums);
  getSums(groups2, sum, sums);

  return Math.max(...sums);
}

function getSums(groups, sum, sums){
  for (let group of groups){
    if (group.length === 0)
      continue;

    let result = group.reduce(sum);
    sums.push(result);

  }
}
