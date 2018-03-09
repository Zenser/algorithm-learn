/**
 * 二分查找，时间复杂度O(log(n))
 * 步骤1：准备数据，有序数组array，目标值target，low=0，high=array.length-1
 * 步骤2：低位是否大于高位，大于则结束返回-1，target与数组中间值进行比较，相等则结束返回中间索引，不相等步骤3
 * 步骤3：target偏小则高位指向中间值上一位，偏大则低位指向中间值下一位，继续步骤2
 * @param array
 * @param low
 * @param high
 * @param target
 * @returns {*}
 */
exports.binarySearch = function binarySearch(array, low, high, target) {
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2),
            midValue = array[mid]
        if (target === midValue) {
            return mid
        } else if (target < midValue) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

//recursive
exports.binarySearchRecursive = function binarySearchRecursive(array, low, high, target) {
    if (low > high) {
        return -1
    }
    var mid = low + parseInt((high - low) / 2),
        midValue = array[mid]
    if (target === midValue) {
        return mid
    } else if (target < midValue) {
        return binarySearchRecursive(array, low, mid - 1, target)
    } else {
        return binarySearchRecursive(array, mid + 1, high, target)
    }
}