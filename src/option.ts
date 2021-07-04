import { Box } from "./box"
import { DefaultOrFunc, getDefault } from "./fn"
import { Voidable } from "./maybe"

/** Optional values 
 * @deprecated
*/
export class Option<T> implements Box<Voidable<T>> {
    val: Voidable<T>
    #has: boolean
    private constructor(has: boolean, val?: T) {
        this.#has = has
        if (has) this.val = val
    }

    get has() {
        return this.#has
    }

    toString() {
        if (this.#has) return `Some(${this.val})`
        else return `None`
    }

    map<R>(f: (val: T) => R): Option<R> {
        if (this.#has) return Option.some(f(this.val!))
        return Option.none()
    }

    then<R>(f: (val: T) => Option<R>): Option<R> {
        if (this.#has) return f(this.val!)
        return Option.none()
    }

    or(other: DefaultOrFunc<Option<T>>): Option<T> {
        if (this.#has) return this
        else return getDefault(other)
    }

    xor(other: Option<T>): Option<T> {
        if (this.#has && !other.has) return this
        else if (!this.#has && other.has) return other
        else return Option.none()
    }

    and<U>(other: Option<U>): Option<U> {
        if (this.#has) return other
        else return Option.none()
    }

    take(): Option<T> {
        if (this.#has) {
            this.#has = false
            return Option.some(this.val!)
        }
        return Option.none()
    }

    static some<T>(value: T) {
        return new Option<T>(true, value)
    }
    static none<T>(): Option<T> {
        return Option.None
    }
    static None = new Option<any>(false)
}
