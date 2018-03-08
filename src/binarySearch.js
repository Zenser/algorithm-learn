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