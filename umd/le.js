(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function leOr(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (self <= other)
                return true;
        }
        return false;
    }
    exports.leOr = leOr;
    function leAnd(self, ...others) {
        if (others.length == 0)
            return self;
        for (const other of others) {
            if (!(self >= other))
                return false;
        }
        return true;
    }
    exports.leAnd = leAnd;
});
