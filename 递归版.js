function padovanRecursive(n) {
    if (n === 0) {
        return 1;
    } else if (n === 1 || n === 2) {
        return 0;
    } else {
        return padovanRecursive(n - 2) + padovanRecursive(n - 3);
    }
}
console.log(padovanRecursive(3))