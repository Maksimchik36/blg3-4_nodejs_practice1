// логирует результат другой функции
const showResult = (oper, numb, callback) => {
console.log(callback(oper, numb));
}


module.exports = showResult;