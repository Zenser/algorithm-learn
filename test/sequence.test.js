var expect = require('chai').expect
var sequence = require('../src/sequence')

describe('排序算法测试', function () {
    var source = [33, 12, 5, 12],
        result = [5, 12, 12, 33]
    it('冒泡排序', function () {
        expect(sequence.bubbleSequence(source, function (o1, o2) {
            return o1 > o2 ? 1 : o1 === o2 ? 0 : -1
        })).to.be.deep.equal(result)
    })

    it('快速排序', function () {
        expect(sequence.quickSequence(source, [], 0, source.length - 1)).to.be.deep.equal(result)
    })
})
