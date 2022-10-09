const {sum, sub, mult, div} = require('./lib');

// производит калькуляцию элементов массива
const calculate = (operation, numbers) => {
    switch (operation) {
        case "sum":
            return sum(numbers);
        case "sub":
            return sub(numbers);
        case "mult":
            return mult(numbers);
        case "div":
            return div(numbers);
        default:
            console.log("Unknown operation type.");
    }
}


module.exports = calculate;