function throttle(fn, delay) {
    var _this = this;
    if (delay === void 0) { delay = 500; }
    var canRun = true;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!canRun) {
            return;
        }
        canRun = false;
        setTimeout(function () {
            fn.apply(_this, args);
            canRun = true;
        }, delay);
    };
}
