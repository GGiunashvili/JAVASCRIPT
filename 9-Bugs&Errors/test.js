// ### Retry
// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in th
// e other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that 
// wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.


class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      // Try to call primitiveMultiply and return the result if successful
      return primitiveMultiply(a, b);
    } catch (e) {
      // If we catch a MultiplicatorUnitFailure, we retry
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Retrying due to failure...");
      } else {
        // If we catch a different error, we throw it
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64 (or retries until success)
