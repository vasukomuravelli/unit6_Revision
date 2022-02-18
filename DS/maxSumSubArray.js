function maxSubArray(arr, k) {
  let max = 0;
  // BruteForce
  //   for (let i = 0; i < arr.length - k + 1; i++) {
  //     let sum = 0;
  //     for (let j = i; j < i + k; j++) {
  //       sum += arr[j];
  //     }
  //     max = Math.max(sum, max);
  //   }
  //   console.log(max);

  // SlidingWindow
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = Math.max(sum, max);
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(sum, max);
  }
  console.log(max);
}

maxSubArray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4);
