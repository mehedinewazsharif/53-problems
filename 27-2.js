// Solution 2
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar);

function getDistinctElements(ar) {
    var ar2 = [];

    var lastIndex = ar.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
        if (!isInArray(ar[i], ar, i + 1, lastIndex)) {
            ar2.push(ar[i]);
        }
    }

    return ar2;
}

function isInArray(n, ar, fromIndex, toIndex) {
    for (var i = fromIndex; i <= toIndex; i++) {
        if (ar[i] === n)
            return true;
    }

    return false;
}
