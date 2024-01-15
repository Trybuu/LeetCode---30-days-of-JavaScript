const expect = (a) => {
  return {
    toBe: (b) => {
      if (a === b) return true
      else {
        throw new Error('Not Equal')
      }
    },
    notToBe: (b) => {
      if (a === b) throw new Error('Equal')
      else return true
    },
  }
}

console.log('5, 4', expect(5).toBe(4))
console.log(expect(3).notToBe(3))
console.log(expect(3).notToBe(null))
