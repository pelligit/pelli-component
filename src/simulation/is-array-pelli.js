Array.isArray = function(tar){
    var toString = Object.prototype.toString;
    var tar_type = toString.call(tar);

    return tar_type ==='[object Array]';
};