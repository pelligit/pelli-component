// https://github.com/Chalarangelo/30-seconds-of-code
// https://30secondsofcode.org/
// 根据数组b创建一个Set对象
// 然后在数组a上使用Array.filter方法过滤数组b中不包含的值
export default (a, b) => {
    const s = new Set(b);

    return a.filter(x => !s.has(x));
}