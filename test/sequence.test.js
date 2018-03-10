var expect = require('chai').expect
var sequence = require('../src/sequence')
var swap = require('../src/swap')

describe('swap测试', function () {
    it('swap', function () {
        expect(swap([1, 2], 0, 1)).to.be.deep.equal([2, 1])
    })
})

describe('排序算法测试', function () {
    console.log('source:' + sourceArray())
    console.log('equal:' + resultArray())
    it('冒泡排序', function () {
        expect(sequence.bubbleSequence(sourceArray(), compareFn)).to.be.deep.equal(resultArray())
    })

    it('插入排序', function () {
        expect(sequence.insertSequence(sourceArray(), [], 0, sourceArray().length - 1))
            .to.be.deep.equal(resultArray())
    })

    it('快速排序', function () {
        expect(sequence.quickSequence(sourceArray(), [], 0, sourceArray().length - 1))
            .to.be.deep.equal(resultArray())
    })
})

var source, result;
function sourceArray(n) {
    if (source) {
        return source.slice(0)
    }
    source = []
    n = n || 10
    for (var i = 0; i < n; i++) {
        source.push(parseInt(Math.random() * 1000))
    }
    return sourceArray(n)
}

function resultArray() {
    if (result) {
        return result.slice()
    }
    return result = sourceArray().sort(compareFn)
}

function compareFn(o1, o2) {
    return o1 > o2 ? 1 : o1 === o2 ? 0 : -1
}

