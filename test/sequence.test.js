var expect = require('chai').expect
var sequence = require('../src/sequence')

describe('排序算法测试', function () {
    it('冒泡排序', function () {
        expect(sequence.bubbleSequence([33, 12, 5, 12], function (o1, o2) {
            return o1 > o2 ? 1 : o1 === o2 ? 0 : -1
        })).to.be.deep.equal([5, 12, 12, 33])
    })
})
