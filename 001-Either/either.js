// Defining Either Monad
class Either {
  constructor(value) {
    this.value = value;
  }

  static left(value) {
    return new Left(value);
  }

  static right(value) {
    return new Right(value);
  }

  // bind method (same as flatMap or chain)
  bind() {
    throw new Error("bind not implemented");
  }
}

class Left extends Either {
  bind(func) {
    return this; // Ignore, because there is already an error
  }
}

class Right extends Either {
  bind(func) {
    return func(this.value); // Aply the function to the value
  }
}

// Transform value into Either
function unit(value) {
  return Either.right(value);
}

// Exemple
function safeDivide(x, y) {
  if (y === 0) {
    return Either.left("Cannot divide by zero");
  } else {
    return Either.right(x / y);
  }
}

const result = unit(10)
  .bind((x) => safeDivide(x, 2))
  .bind((x) => unit(x + 1));

if (result instanceof Left) {
  console.log("Error:", result.value);
} else {
  console.log("Success:", result.value);
}

// Uncomment to see trying divide by zero
// const resultZero = unit(10)
//   .bind((x) => safeDivide(x, 0))
//   .bind((x) => unit(x + 1));

// if (resultZero instanceof Left) {
//   console.log("Error:", resultZero.value);
// } else {
//   console.log("Success:", resultZero.value);
// }
