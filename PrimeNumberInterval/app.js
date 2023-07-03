var num = +window.prompt("Enter first number");
//var num2 = +window.prompt("Enter Second number");

var count=0;
for(var i = 2; i < num ; i++)
{
  if(num % i == 0)
  {
	count++;
    break;
  }
}

if(count)
console.log(`${num} is not a prime number`)
else
console.log(`${num} is a prime number`)

