function calcular (num1, num2, callback) {
    return callback(num1, num2);

};

function multiplicar (num1, num2) {
    return num1 * num2;

};

function dividir (num1, num2)  {
    return num1 / num2;
};

console.log(calcular(5, 5, multiplicar));
console.log(calcular(5, 2, dividir));