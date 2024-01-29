/*
    Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

    The class has three public methods:

        - set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

        - get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

        - count(): returns the count of un-expired keys.

 
*/

const TimeLimitedCache = function () {
  this.cache = {}
}

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isInCache = key in this.cache

  if (isInCache) {
    clearTimeout(this.cache[key].timeout)
  }

  this.cache[key] = {
    value: value,
    timeout: setTimeout(() => {
      delete this.cache[key]
    }, duration),
  }

  return isInCache
}

TimeLimitedCache.prototype.get = function (key) {
  if (key in this.cache) {
    return this.cache[key].value
  } else {
    return -1
  }
}

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length
}

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

console.log('---------------------------------')

const timeLimitedCache2 = new TimeLimitedCache()
timeLimitedCache2.set(1, 42, 50)
timeLimitedCache2.set(1, 50, 100)
console.log(timeLimitedCache2.get(1))
console.log(timeLimitedCache2.get(1))
console.log(timeLimitedCache2.get(1))
console.log(timeLimitedCache2.count())
