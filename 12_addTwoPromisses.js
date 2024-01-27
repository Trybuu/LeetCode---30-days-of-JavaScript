const addTwoPromises = async function (promise1, promise2) {
  try {
    Promise.all([promise1, promise2]).then((values) => {
      let result = values.reduce((acc, curr) => acc + curr, 0)

      return result
    })
  } catch (error) {
    console.log(error)
  }
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log) // 4
