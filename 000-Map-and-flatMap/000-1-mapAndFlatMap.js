const arr = [1, 2, 3, 4];

// Using map() to double each element
const mappedArr = arr.map((x) => [x * 2]);
console.log(mappedArr);
// Result: [[2], [4], [6], [8]]

// Using flat() to flatten the array
const flattenedArr = mappedArr.flat();
// Result: [2, 4, 6, 8]

console.log(flattenedArr);
