/**
 * 交换数组中的值
 * @param array
 * @param k1
 * @param k2
 */
module.exports = function swap(array, k1, k2) {
    var length
    if (Array.isArray(array)
        && (length = array.length)
        && k1 >= 0 && k1 < length
        && k2 >= 0 && k2 < length
    ) {
        var t = array[k1]
        array[k1] = array[k2]
        array[k2] = t
    }
    return array
}