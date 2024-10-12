/**
 *
 * Caclulationg functions
 * Uses some code from ALAB-308.3.1-Practical-Loops
 */

// sum all items in ary
export function sum(ary) {
  let sum = 0;
  for (let i = 0; i < ary.length; i++) {
    sum += ary[i];
  }
  return sum;
}

// get the avg of all items in ary
export function avg(ary) {
  let len = ary.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    total += ary[i];
  }
  return total / len;
}

// recursions
export function rec(n, i) {
  if (i > n) {
    return;
  } else {
    console.log(i);
    i++;
    rec(n, i);
  }
}

// Part 1 - Fizz Bizz Problem
export function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} is a Fizz Buzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} is a Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} is a Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
}

// Part 2 - Prime Numbers
export function findPrimes(n) {
  console.log("\nPart - 2: Prime Numbers:");
  let j = n + 1;
  let max = n + 25;
  let nextPrime = 0;
  let isPrime = false;

  while (isPrime !== true) {
    // find if nums before j are divisible
    if (n == 0) {
      nextPrime = 1;
      isPrime = true;
      break;
    }

    let i = 1;
    while (i < j) {
      // console.log("before n", i);
      if (j % i == 0 && i !== 1) {
        console.log(`${j} is not ${isPrime}`);
        isPrime = false;
        break;
      } else {
        nextPrime = j;
        isPrime = true;
      }

      i++;
    }

    j++;

    if (isPrime) {
      // console.log(`${nextPrime} is the next prime`);
      break;
    }
  }

  // console.log(nextPrime);

  if (isPrime) {
    console.log(`The next prime after ${n} is ${nextPrime}`);
  } else {
    console.log(`There is no prime in the next ${max} after ${n}`);
  }
}
