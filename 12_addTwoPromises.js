const addTwoPromises = async function (promise1, promise2) {
  const result = Promise.all([promise1, promise2])
    .then((values) => {
      return values[0] + values[1]
    })
    .catch((error) => {
      console.log(error)
    })

  return result
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log) // 4
