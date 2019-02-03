"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inOr(obj, ...keys) {
    if (keys.length == 0)
        return false;
    for (const key of keys) {
        if (key in obj)
            return true;
    }
    return false;
}
exports.inOr = inOr;
function inAnd(obj, ...keys) {
    if (keys.length == 0)
        return false;
    for (const key of keys) {
        if (!(key in obj))
            return false;
    }
    return true;
}
exports.inAnd = inAnd;
