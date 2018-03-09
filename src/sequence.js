/**
 * 冒泡排序 时间复杂度O(n!)
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
                var t = array[p1]
                array[p1] = array[p2]
                array[p2] = t
            }
            p2++
        }
        p1++
    }
    return array
}