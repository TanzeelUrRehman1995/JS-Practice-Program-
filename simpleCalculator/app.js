
let firstNumber = +window.prompt("Enter First Number");
let secondNumber = +window.prompt("Enter Second Number");

let selectOperator = window.prompt("Select operator '+' , '-' , '*' or '/' ");

let result;

if(selectOperator == '+'){
    result = firstNumber + secondNumber;
    console.log(result);
} else if(selectOperator == '-'){
    result = firstNumber - secondNumber;
    console.log(result);
} else if(selectOperator == '*'){
    result = firstNumber * secondNumber;
    console.log(result);
} else if (selectOperator == '/'){
    result = firstNumber / secondNumber;
    console.log(result);
} else{
    console.log("Caught an error!");
}