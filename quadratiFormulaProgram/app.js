var a = window.prompt("Enter the value of a");
var b = window.prompt("Enter the value of b");
var c = window.prompt("Enter the value of c");

console.log(`The value of a is ${a}
The value of b is ${b}
The value of c is ${c}`);

var discriminant = b * b - 4 * a * c;
var root1, root2;
if (discriminant > 0) {
  root1 = -b + (Math.sqrt(discriminant) / 2) * a;
  root1 = -b - (Math.sqrt(discriminant) / 2) * a;

  console.log(`The roots are ${root1} and ${root2}`);
}

if (discriminant == 0) {
  root1 = root2 = (-b / 2) * a;
  
  console.log(`The roots are ${root1} and ${root2}`);
}
