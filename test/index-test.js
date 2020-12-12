describe('#largestSubarraySum', function() {
  it('returns the largest subarray sum for an array of all-positive integers', function () {
		let array = [1, 100, 4, 15, 9, 30]
		expect(largestSubarraySum(array)).toEqual(159)
  });

  it('returns the largest subarray sum when the array has some negative numbers at the end', function() {
		let array = [1, 100, 4, 15, 9, 30, -1]
		expect(largestSubarraySum(array)).toEqual(159)
  });

  it('returns the largest subarray sum when the array has some negative numbers at the start', function() {
		let array = [-3, 1, 100, 4, 15, 9, 30]
		expect(largestSubarraySum(array)).toEqual(159)
  });

  it('returns the largest subarray sum when there are negatives at the beginning and end of the array', function () {
		let array = [-3, 1, 100, 4, 15, 9, 30, -1]
		expect(largestSubarraySum(array)).toEqual(159)
  });

	it('returns the largest subarray sum where the subarray has negatives inside it', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})

	it('returns largest subarray sum with two negatives in between', function(){
		let array = [-2, -3, 4, -1, -2, 1, 5, -3]
		expect(largestSubarraySum(array)).toEqual(7)
	})

	it('returns largest subarray sum when the sum does not go to zero from left to right', function(){
		let array = [2, 1, -3, 4, -1, 2, 1, -5, 4]
		expect(largestSubarraySum(array)).toEqual(6)
	})

  it('returns the largest subarray sum when all the items are negative', function() {
		let array = [-1, -1, -5, -3, -7, -4, -5, -6, -100, -4]
		expect(largestSubarraySum(array)).toEqual(-1)
  });

  it('runs within the time limit - in O(n) time, instead of O(n^2) time', function () {
    let timeLimit = 1000; // 1 seconds
    this.timeout(timeLimit)
    let array = new Array(1000).fill(1); // should result in sum of 10000
    expect(largestSubarraySum(array)).toEqual(1000)
  });
});
