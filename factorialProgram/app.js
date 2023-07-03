var number = parseInt(prompt("Enter Any Number"));
console.log(`You entered ${number}`);

if (number < 0){
    console.log(`The factorial of ${number} does not exist`);
}
else if ( number == 0){
    console.log(`The factorial of ${number} is 1`);
}

else {
    var factorial = 1 ;
    for( var i = 1; i <=number ; i++){
        factorial *= i; 
    }
    console.log(`The factorial of ${number} is ${factorial}`);
}