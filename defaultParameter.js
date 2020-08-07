function myFunc(number1 = 0, number2 = 0) {
   const sum = number1 + number2;
   const diff = number1 - number2;
    return sum*diff
}
const result = myFunc(30);
console.log(`Here myFunc is greater than 500 ${result > 500 ? 'yes' : 'No'}`)