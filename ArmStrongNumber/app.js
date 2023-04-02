var number = window.prompt("Enter a Number");
var temp = number;
var numberOfDigit = number.length;
console.log(`Digit : ${numberOfDigit}`);

var sum = 0;

while ( temp > 0){
    var reminder = temp % 10;
    console.log(reminder)
    sum+=reminder**numberOfDigit;
    console.log(sum);
    temp = parseInt(temp/10);
    console.log(temp);
    console.log(`---------------`)
}

if(number == sum){
    console.log(`${number} is an Armstrong Number`);
}

else{
    console.log(`${number} is not an Armstrong Number`);
}
