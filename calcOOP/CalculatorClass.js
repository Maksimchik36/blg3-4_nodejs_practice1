// 1-ый вариант
// class CalculatorClass {
//     constructor(operation, numbers) {
//         this.operation = operation;
//         this.numbers = numbers;
//     }

//     // суммирует все элементы массива
//     sum(array) { return array.reduce((acc, num) => acc + num) };
    
//     // вычитает все элементы массива
//     sub(array) { return array.reduce((acc, num) => acc - num) };
    
//     // умножает все элементы массива
//     mult(array) { return array.reduce((acc, num) => acc * num) };
    
//     // делит все элементы массива
//     div(array) { return array.reduce((acc, num) => acc / num) };
    
//     // производит калькуляцию элементов массива
//     calculate(operation, numbers) {
//         switch (operation) {
//             case "sum":
//                 return this.sum(numbers);
//             case "sub":
//                 return this.sub(numbers);
//             case "mult":
//                 return this.mult(numbers);
//             case "div":
//                 return this.div(numbers);
//             default:
//                 console.log("Unknown operation type.");
//         }
//     }
//     showResult(oper, numb, callback) {
//         console.log(callback(oper, numb));
//     }
//     // инициализируем новую функцию
//     init() {
//         this.showResult(this.operation, this.numbers, this.calculate.bind(this))
//     }

    
// }


// module.exports = CalculatorClass;








// 2-ой вариант
class CalculatorClass {
    constructor(operation, numbers) {
        this.operation = operation;
        this.numbers = numbers;
    }

    // суммирует все элементы массива
    sum = (array) => { return array.reduce((acc, num) => acc + num) };
    
    // вычитает все элементы массива
    sub = (array) => { return array.reduce((acc, num) => acc - num) };
    
    // умножает все элементы массива
    mult = (array) => { return array.reduce((acc, num) => acc * num) };
    
    // делит все элементы массива
    div = (array) => { return array.reduce((acc, num) => acc / num) };
    
    // производит калькуляцию элементов массива
    calculate = (operation, numbers) => {
        switch (operation) {
            case "sum":
                return this.sum(numbers);
            case "sub":
                return this.sub(numbers);
            case "mult":
                return this.mult(numbers);
            case "div":
                return this.div(numbers);
            default:
                console.log("Unknown operation type.");
        }
    }

    showResult = (oper, numb, callback) => {
        console.log(callback(oper, numb));
    }

    // инициализируем новую функцию
        init = () => {
        console.log("public field");
        this.showResult(this.operation, this.numbers, this.calculate)
    }

    hobbies = ["music", "sport", "dance"];    
}


module.exports = CalculatorClass;