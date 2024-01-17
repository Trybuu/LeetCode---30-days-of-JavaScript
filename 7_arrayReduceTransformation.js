/*
  Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

  This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

  If the length of the array is 0, the function should return init.

  Please solve it without using the built-in Array.reduce method.

 
*/

const reduce = function (nums, fn, init) {
  let sum = init

  if (nums.length >= 1) nums.forEach((num) => (sum = fn(sum, num)))
  else if (nums.length === 0) return (sum = init)

  return sum
}

// const nums = [1, 2, 3, 4]
// const fn = function sum(accum, curr) {
//   return accum + curr
// }
// const init = 0

// reduce(nums, fn, init)

const nums = [1, 2, 8, 3, 10, 23]
const fn = function sum(accum, curr) {
  return (curr + accum) % 2
}
const init = 25

console.log('wynik ' + reduce(nums, fn, init))
