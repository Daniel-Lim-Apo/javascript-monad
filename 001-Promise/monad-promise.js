// Function unit
function unit(value) {
  return Promise.resolve(value);
}

// Function bind
function bind(promise, func) {
  return promise.then(func);
}

// Unit and bind
const result = unit(2)
  .then((x) => unit(x + 3))
  .then((x) => unit(x * 2));

result.then(console.log);
