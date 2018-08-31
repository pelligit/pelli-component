Function.prototype.bind = function(){
    // 将参数转换成数组
    var args = Array.prototype.slice.call(arguments);
    
    // 获取第一个参数值
    var this_obj = args.shift();

    var _this = this;

    function VirtualProto(){}

    VirtualProto.prototype = _this.prototype;
    VirtualBind.prototype = new VirtualProto();
    
    function VirtualBind(){
        var real_this = null;

        if(this instanceof _this){
            real_this = this;
        }else{
            real_this = this_obj;
        }

        return _this.apply(real_this, args);
    }

    return VirtualBind;
};