var number = +window.prompt("Enter decimal Number", "");

console.log(`Your Entered Decimal Number is ${number}`);
var result= "";

/*for (var quotient = number; quotient > 0; quotient = Math.floor(quotient / 2)) {
     result+=quotient%2;
}

console.log(`The conversion of ${number} into Binary Number is ${result}`);
*/
// var result = "";
// var quotient=number;
// while (quotient > 0){
//     result+=quotient%2;

//     quotient=parseInt(quotient/2);
// }

//     result = result.split("");
//     result.reverse();
//     result = result.join("")
//     console.log(result)

for( var i=number ; i > 0 ; i=Math.floor(i/2)){
    result = (i%2) + result;
}

console.log(result)
document.write(result)