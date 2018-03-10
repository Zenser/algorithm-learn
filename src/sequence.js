var binarySearch = require('./binarySearch')
var swap = require('./swap');

/**
 * 冒泡排序 时间复杂度O(n^2)
 * f(n) = f(n-1) + n = n + (n - 1) + (n - 2) + ... + (n - n)
 * = n^2 - n * (n + 1) / 2
 * = n^2 / 2 - n / 2 <= n^2
 * 步骤1：指针p1=array[0]，指针p2=array[1]
 * 步骤2：比较函数fn(p1, p2)执行，大于0，array中执行的值互换；其他不做变动
 * 步骤3：p2是否到最末，否则p2指针继续向后移动，跳转步骤2；是则步骤4
 * 步骤4：p1是否倒数第二位，是则结束；否则p1像后移动一位，p2移动到p1的下一位，继续步骤2
 * @param array
 * @param fn
 */
exports.bubbleSequence = function bubbleSequence(array, fn) {
    var p1 = 0,
        length = array.length;
    while (p1 < length - 1) {
        var p2 = p1 + 1
        while (p2 < length) {
            var flag = fn(array[p1], array[p2])
            if (flag > 0) {
                swap(array, p1, p2)
            }
            p2++
        }
        p1++
    }
    return array
}

/**
 * 快速排序 时间复杂度(O(n * log(n)))
 * 步骤1：待排序数组a1，空数组a2，待排序索引start=0, end=a1.length - 1
 * 步骤2：取出a1[start]位置数据，二分查找出a2对应位置，插入a2
 * 步骤3：start向后移动，是否大于end，是则结束，否则回到步骤2
 */
exports.quickSequence = function quickSequence(array1, array2, start, end) {
    while (start <= end) {
        var value = binarySearch.binarySearchReturnIndex(array2, 0, array2.length, array1[start])
        array2.splice(value.index, 0, array1[start])
        console.log('quick sequence' + value.index)
        start++
    }
    return array2
}