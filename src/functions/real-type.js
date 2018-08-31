export default function(tar){
    let str = Object.prototype.toString.call(tar);

    return str.substring(8, str.length - 1);
};