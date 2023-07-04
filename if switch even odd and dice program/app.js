/*var city = window.prompt("Where are you from","").toLowerCase();

if(city == "karachi"){
    console.log("Welcome to city of light");
}*/

/*var signal = window.prompt("Right Now what is the color of Signal Light?","RED YELLOW OR GREEN").toLowerCase();

if(signal == "red"){
 console.log("Signal is Red!\nkindly stop the car");
}

if(signal == "yellow"){
    console.log("Signal is Yellow!\nget ready to go");
}

if(signal == " green"){
    console.log("Signal is Green!\nPlease Go");
}*/

/*var value1 = window.prompt("Enter 1st Value");
var value2 = window.prompt("Enter 2nd Value");

var opt = window.prompt("+ , - , * , / , %","");

if (opt == "+"){
    var add = Number(value1) + Number(value2);
    console.log(add);
}

if (opt == "-"){
    var sub= value1 - value2;
    console.log(sub);
}

if(opt == "*"){
 var multiply = value1*value2;
console.log(multiply); 
}

if(opt == "/"){
    var divide= value1/value2;
    console.log(divide);
}

if(opt == "%"){
    var rem = value1%value2;
    console.log(rem); 
}*/

//SWITCH STATEMENT

/*var value1 = window.prompt("Enter 1st Value");
var value2 = window.prompt("Enter 2nd Value");

var opt = window.prompt("+ , - , * , / , %", "");
var result;

switch (opt) {
  case "+":
    result = Number(value1) + Number(value2);
    console.log("Sum " + result);
    break;

  case "-":
    result = value1 - value2;
    console.log("Subtraction " + result);
    break;

  case "*":
    result = value1 * value2;
    console.log("Multiplication " + result);
    break;

  case "/":
    result = value1 / value2;
    console.log("Division " + result);
    break;

  case "%":
    result = value1 % value2;
    console.log("Reminder " + result);
    break;

  default:
    console.log("Invalid Operator");
}*/

//EVEN OR ODD NUMBER

/*var val = window.prompt("Enter a Number to know number is EVEN or ODD","");
console.log("You Entered " + val);

if (val % 2 == 0){
    console.log(val + " Is Even Number");
} 
else 
{
    console.log(val + "  Is Odd Number");
} */
 

//var num = Math.floor(Math.random() * 2);
//var num = Math.ceil(Math.random() * 2);
// var num = Math.round(Math.random() * 2);



// if (num % 2 == 0){
//     console.log(num + " Is Even Number");
// } 
// else 
// {
//     console.log(num + "  Is Odd Number");
// }

//DICE

var dice = Math.ceil(Math.random() * 6);
console.log (dice);