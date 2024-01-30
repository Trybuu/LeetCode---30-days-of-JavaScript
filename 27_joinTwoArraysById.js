const join = function (arr1, arr2) {
  const merged = [...arr1, ...arr2]
  const result = {}

  for (obj of merged) {
    if (!result[obj.id]) result[obj.id] = obj

    result[obj.id] = { ...result[obj.id], ...obj }
  }

  return Object.values(result)
}

// -----------------------------
const arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
]
const arr2 = [{ id: 3, x: 5 }]

console.log(join(arr1, arr2))
console.log('---------------------')

const arr3 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]
const arr4 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

console.log(join(arr3, arr4))
