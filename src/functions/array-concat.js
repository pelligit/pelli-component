// https://github.com/Chalarangelo/30-seconds-of-code
// https://30secondsofcode.org/
export default (arr, ...args) => [].concat(arr, ...args);
// ArrayConcat([1], [1, 2, 3, [4]])// (5) [1, 1, 2, 3, Array(1)]