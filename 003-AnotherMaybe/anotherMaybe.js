// Defining the Maybe Monad
class Maybe {
  constructor(value) {
    this.value = value;
  }

  static just(value) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  // bind method (also known as flatMap or chain)
  bind(func) {
    if (this instanceof Nothing) {
      return this;
    } else {
      return func(this.value);
    }
  }
}

class Just extends Maybe {
  constructor(value) {
    super(value);
  }
}

class Nothing extends Maybe {
  constructor() {
    super(null);
  }
}

// Function to wrap a value into Maybe
function unit(value) {
  return value != null ? Maybe.just(value) : Maybe.nothing();
}

// Example usage
const result = unit(10)
  .bind((x) => unit(x + 5))
  .bind((x) => unit(null)) // Simulate a computation that returns null
  .bind((x) => unit(x * 2));

if (result instanceof Nothing) {
  console.log("Result is Nothing"); // Output: Result is Nothing
} else {
  console.log("Result:", result.value);
}
