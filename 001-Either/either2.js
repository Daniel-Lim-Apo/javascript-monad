class Either {
  constructor(value, isLeft = false) {
    this.value = value;
    this.isLeft = isLeft;
  }

  static right(value) {
    return new Either(value, false);
  }

  static left(value) {
    return new Either(value, true);
  }

  map(fn) {
    return this.isLeft ? this : Either.right(fn(this.value));
  }

  flatMap(fn) {
    return this.isLeft ? this : fn(this.value);
  }

  getOrElse(defaultValue) {
    return this.isLeft ? defaultValue : this.value;
  }
}

// Example of using the Either monad
const safeDivide = (num, denom) =>
  denom === 0 ? Either.left("Division by zero") : Either.right(num / denom);

const result = safeDivide(10, 2)
  .map((x) => x + 2)
  .flatMap((x) => safeDivide(x, 0))
  .getOrElse("Error");

console.log(result);

const successfulResult = safeDivide(10, 2)
  .map((x) => x + 2)
  .flatMap((x) => safeDivide(x, 2))
  .getOrElse("Error");

console.log(successfulResult);
