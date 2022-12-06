function createCounter() {
  let counter = 0;

  function increCounter() {
    counter = counter + 1
    return counter
  }

  return increCounter
}

// const count1 = createCounter()
// console.log(count1()); // 1
// console.log(count1()); // 2
// console.log(count1()); // 3

// const count2 = createCounter()
// console.log(count2()); // 1
// console.log(count2()); // 2
// console.log(count2()); // 3

function hihi() {
  console.log('hihi');
}

function haha() {
  console.log('haha');
}

function demoCb(callback) {
  callback()
}

function printSomething(something) {
  console.log(something)
}

function sum(a, b, callback) {
  const result = a + b
  callback(result)
}

// sum(4, 5, printSomething)

// demoCb(hihi)
// demoCb(haha)

function factorial(number) {
  if (number === 1) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(5));