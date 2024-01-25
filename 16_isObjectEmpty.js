/*
  Given an object or an array, return if it is empty.

  An empty object contains no key-value pairs.
  An empty array contains no elements.
  You may assume the object or array is the output of JSON.parse.
*/

const isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true
  } else {
    return false
  }
}

const obj = { x: 5, y: 42 }
console.log(isEmpty(obj)) // false

const arr = [1, 2, 3]
console.log(isEmpty(arr)) // false

const arr2 = []
console.log(isEmpty(arr2)) // true
