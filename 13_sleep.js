// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
  try {
    promise = new Promise((resolve, reject) => {
      if (millis < 1 || millis >= 1000) {
        reject(new Error('Invalid millis value'))
      } else {
        setTimeout(() => {
          resolve(millis)
        }, millis)
      }
    })

    const result = await promise
    return result
  } catch (error) {
    throw error
  }
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
