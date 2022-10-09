//                                      ПРИМИТИВНЫЙ КАЛЬКУЛЯТОР
// Для работы приложения в терминал нужно передавать что-то подобное: node server.js mult 2 3 4

const Calculator = require('./CalculatorClass');


// отсекает первые два элемента массива process.argv - node.exe и calc.js
const clearProcessArray = process.argv.slice(2);  // [ 'mult', '2', '3', '4' ]

// деструктуризирует операцию и оставшиеся элементы
const [operation, ...args] = clearProcessArray;   // mult  и  [ '2', '3', '4' ]

// преобразовывает строчные элементы в числа
const numbers = args.map(item => Number(item)) // [2, 3, 4]

// передает в класс operation и numbers
// const calc = new Calculator(operation, numbers).init(); // при иcп-нии bind
const calc = new Calculator(operation, numbers);
calc.init();


// console.log(calc.hobbies);


// showResult(operation, numbers, calculate);