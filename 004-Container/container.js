class Container {
  constructor(value) {
    this.value = value;
  }

  // The map method applies a function to the encapsulated value and returns a new Container with the result.
  map(fn) {
    return new Container(fn(this.value));
  }

  // The flatMap method applies a function that returns a new monad (Container) and "flattens" it by not nesting Containers.
  flatMap(fn) {
    return fn(this.value);
  }

  // Auxiliary method to visualize the encapsulated value
  toString() {
    return `Container(${this.value})`;
  }
}

// Example of using the Container monad
const container = new Container(2);
const result = container.map((x) => x + 2).flatMap((x) => new Container(x * 3));

console.log(result.toString());
