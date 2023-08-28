var fibonacci = function (num) {
    var result = [0, 1];
    for (var i = 2; i < num; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
};
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
