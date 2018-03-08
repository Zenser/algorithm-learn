var search = require('../src/binarySearch')
var expet = require('chai').expect

describe('二分查找的测试', function () {
    var t1 = [1]
    it(t1 + '找1', function () {
        expet(search.binarySearch([1], 0, 1, 1)).to.be.equal(0)
        expet(search.binarySearchRecursive([1], 0, 1, 1)).to.be.equal(0)
    })
    var t2 = [1, 2]
    it(t2 + '找2', function () {
        expet(search.binarySearch(t2, 0, t2.length, 2)).to.be.equal(1)
        expet(search.binarySearchRecursive(t2, 0, t2.length, 2)).to.be.equal(1)
    })
    var t3 = [1, 33, 56, 78]
    it(t3 + '找56', function () {
        expet(search.binarySearch(t3, 0, t3.length, 56)).to.be.equal(2)
        expet(search.binarySearchRecursive(t3, 0, t3.length, 56)).to.be.equal(2)
    })
    it(t3 + '找2', function () {
        expet(search.binarySearch(t3, 0, t3.length, 2)).to.be.equal(-1)
        expet(search.binarySearchRecursive(t3, 0, t3.length, 2)).to.be.equal(-1)
    })
})