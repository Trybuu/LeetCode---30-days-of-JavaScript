// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
/**
 * @return {Function}
 */

const createHelloWorld =
  () =>
  (...args) =>
    'Hello World'

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
