// unit
function Maybe(value) {
  return {
    bind: function (fn) {
      if (value === null || value === undefined) {
        return Maybe(null);
      }
      return fn(value);
    },
    value: value,
  };
}

// value to Maybe
function unit(value) {
  return Maybe(value);
}

// Unit and bind
const result = unit(2)
  .bind((x) => unit(x + 3))
  .bind((x) => unit(x + 3))
  .bind((x) => unit(x + 3))
  .bind((x) => unit(x * 2));

console.log(result.value);

// Uso de unit e bind
const resultWithNull = unit(2)
  .bind((x) => unit(x + 3))
  .bind((x) => unit(x + 3))
  .bind((x) => unit(null))
  .bind((x) => unit(x + 3))
  .bind((x) => unit(x * 2));

console.log(resultWithNull.value);
