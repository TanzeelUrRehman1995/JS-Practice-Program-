var specialCharacters = "@#$%&_-";
var password = "";

for (var i = 0; i < 10; i++) {
  if (i < 3) {
    if (i == 2){
        password +=
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    password +=
    String.fromCharCode(Math.floor(Math.random() * 26 + 65))
  } else if (i < 6) {
    password +=
    String.fromCharCode(Math.floor(Math.random() * 26 + 97))
  } else if (i < 9) {
    password +=
    Math.floor(Math.random() * 10)
}
}
console.log(password);
