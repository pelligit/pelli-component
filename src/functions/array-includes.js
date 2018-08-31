// https://github.com/Chalarangelo/30-seconds-of-code
// https://30secondsofcode.org/
// 使用slice()来抵消数组或者字符串
// 并且使用indexOf()来检查是否包含该值，如果省略最后一个参数fromIndex，则会检查整个数组或者字符串
export default (conllection, val, fromIndex = 0) => conllection.slice(fromIndex).indexOf(val) != -1;