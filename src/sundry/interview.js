/**
 * 面试被问到题目的后续思考
 */

/**
 * 实现multiply(1)(2)(3)()
 * 当初做的时候用了立即执行函数闭包了一个暂存变量
 * 后续想想用参数传递形式也可完成，减少了内存IO
 */

// 执行完后返回一个闭包函数，保留对上次执行结果的引用
// 支持multiply(1, 2)(3)(4, 5)()多个参数
function multiply(last, ...args) {
	if (last === undefined) {
		throw new SyntaxError('first call must at least one params')
	}
	var cur = args.reduce((a,  b) => {
		return a * b
	}, last)
    return (...args) => {
        if (!args.length) {
            return cur
        }
        return multiply(cur, ...args)
    }
}

// 更进一步，利用函数式编程思想，尽可能地减少使用语句，减少内存IO，尽量做表达式计算
// 只会在最后不传参数时进行计算，可以做到lazy evaluate
function multiply(...args) {
	if (!args.length) {
		throw new SyntaxError('first call must at least one params')
	}
    return (...nArgs) => {
        if (!nArgs.length) {
            return args.reduce((a,  b) => {
                return a * b
            })
        }
        return multiply(...args, ...nArgs)
    }
}
