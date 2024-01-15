/*
    Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

    toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

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
