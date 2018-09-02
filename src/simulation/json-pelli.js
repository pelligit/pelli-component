window.json = (function(){
    // 判断数据的类别
    function getType(target){
        var toString = Object.prototype.toString;
        var type = toString.call(target);
        var type_len = type.length;
        var type_str = type.substring(8, type_len - 1);

        return type_str.toLowerCase();
    }

    // 获取数组的字符串
    function getArrStr(tar){
        var tar_type = getType(tar);
        var tar_items = [];
        var i, temp_val, real_val, len;

        if(tar_type === 'array'){
            for(i = 0, len = tar.length; i < len; i++){
                temp_val = tar[i];
                
                // 获取数组的值
                real_val = getArrVal(temp_val);

                if(real_val){
                    tar_items.push(real_val);
                }
            }

            return '[' + tar_items.join(',') + ']';
        }else{
            return '';
        }
    }

    // 获取数组值的字符串
    function getArrVal(tar){
        var cur_type = getType(tar);

        var str = '';

        switch(cur_type){
            case 'string':
                str += '"' + tar + '"'; 
                break;        
            case 'number':
                str += tar;
                break;
            case 'boolean':
                str += '' + !!tar
                break;
            case 'null':
                str += 'null';
                break;
            case 'undefined':
                // 数组里面的undefined，在JSON.parse中，被null替代了
                str += 'null';
                break;
            case 'function':
                break;
            case 'array':
                str += getArrStr(tar);
                break;
            case 'object':
                str += getObjStr(tar);
                break;
            default:
                break;
        }

        return str;
    }

    function getARowStr(key, val){
        var cur_type = getType(val);

        var str = '';

        switch(cur_type){
            case 'string':
                str = '"' + key + '":"' + val + '"';
                break;        
            case 'number':
                str = '"' + key + '":' + val;
                break;
            case 'boolean':
                str = '"' + key + '":' + !!val;
                break;
            case 'null':
                str = '"' + key + '":null';
                break;
            case 'function':
                str = "";
                break;
            case 'array':
                str = '"' + key + '":' + getArrStr(val);
                break;
            case 'object':
                str = '"' + key + '":' + getObjStr(val);
                break;
            default:
                str = "";
                break;
        }

        return str;
    }

    function getObjStr(tar){
        var temp_key;
        var temp_val;
        var obj_str_arr = [];

        var type = getType(tar);

        if(type === 'object'){
            for(var key in tar){
                temp_key = key;
                temp_val = tar[key];

                var real_row_str = getARowStr(temp_key, temp_val);
                
                if(real_row_str){
                    obj_str_arr.push(real_row_str);
                }
            }

            return '{' + obj_str_arr.join(',') + '}';
        }else{
            return "";
        }
    }

    function _JSON(){
        this.constructor = Object;
        this.prototype = undefined;

        // 将对象转换为字符串
        this.stringify = function(obj, filter, tab){
            return getObjStr(obj);
        }

        this.parse = function(str, filter){
            var obj = eval('('+ str + ')');

            if(filter && typeof filter === 'function'){
                // 这里是递归遍历，所有的值都需要遍历

                for(var key in obj){
                    if(typeof obj[key] === 'function'){
                        continue;
                    }

                    var cur_val = filter(key, obj[key]);

                    if(cur_val){
                        obj[key] = cur_val;
                    }else{
                        delete obj[key];
                    }
                }
            }

            return obj;
        };

        this.parse1 = function(str, filter){
            var fn_body = `return ${str};`;

            var fn = new Function(fn_body);

            var obj = fn();

            if(filter && typeof filter === 'function'){
                // filter();
                for(var key in obj){
                    if(typeof obj[key] === 'function'){
                        continue;
                    }

                    var cur_val = filter(key, obj[key]);

                    if(cur_val){
                        obj[key] = cur_val;
                    }else{
                        delete obj[key];
                    }
                }
            }

            return obj;
        };
    }

    return new _JSON();
})();