// Promise.length === 1;// 永远为1
// Promise.prototype;

// Promise.all();
// Promise.race();
// Promise.reject();
// Promise.resolve();

// Promise.prototype.constructor = Promise;
// Promise.prototype.catch
// Promise.prototype.then
// Promise.prototype.finally


window.PelliPromise = (function simulationPromise(){
    var _this = null;
    
    // 是否已经设置了reject方法
    var catch_setted = false;

    function noop(){}

    // 初始值皆为一个函数，如果用户没有自行调用then、catch、finally方法，
    // 将初始值设置为函数，保证状态改变时调用这些方法不会出错
    var _then_callback = noop;
    var _catch_callback = noop;
    var _finally_callback = noop;

    // resolve时
    // 参数可能不止一个
    function resolve(){
        _then_callback.call(_this, arguments[0]);

        Object.defineProperty(_this, '[[PromiseValue]]', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: arguments[0]
        });

        Object.defineProperty(_this, '[[PromiseStatus]]', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: 'resolved'
        });

        _finally_callback.call(_this);
        
    };

    // reject时
    function reject(){
        var args = Array.prototype.slice.call(arguments);

        _catch_callback.call(_this, arguments[0]);

        Object.defineProperty(_this, '[[PromiseValue]]', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: arguments[0]
        });

        Object.defineProperty(_this, '[[PromiseStatus]]', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: 'rejected'
        });

        _finally_callback.call(_this);
    };

    function P(fn){
        _this = this;

        Object.defineProperty(this, '[[PromiseValue]]', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: undefined
        });

        Object.defineProperty(this, '[[PromiseStatus]]', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: 'pending'
        });

        fn(resolve, reject);
    }

    P.length = 1;

    // 多个Promise对象竞赛，返回最先resolve的Promise值
    P.race = function(){

    };

    P.resolve = function(){
        // 返回一个状态为resolve的Promise对象
    };

    P.reject = function(){
        // 返回一个状态为拒绝的Promise对象
    };

    P.all = function(){
        
    };

    // 如果then传递了两个方法，并且同时调用了catch方法，那么该使用哪个来rejected呢？
    // 实验证明，哪个先调用，就使用哪个catch
    /**
     * resolve方法
     * reject方法 【可选】
     */
    P.prototype.then = function(){
        if(arguments[0] && typeof arguments[0] === 'function'){
            _then_callback = arguments[0];
        }

        // 看是否有catch方法
        if(arguments[1] && typeof arguments[1] === 'function' && !catch_setted){
            _catch_callback = arguments[1];
            catch_setted = true
        }

        return this;
    };

    P.prototype.catch = function(){
        if(arguments[0] && typeof arguments[0] === 'function' && !catch_setted){
            _catch_callback = arguments[0];
            catch_setted = true;
        }
        
        return this;
    };

    P.prototype.finally = function(){
        if(arguments[0] && typeof arguments[0] === 'function'){
            _finally_callback = arguments[0];
        }
        
        return this;
    };

    return P;
})();

