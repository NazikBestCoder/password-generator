
var generateBtn = document.querySelector("#generate");
// var uppercase;
// var lowercase;
// var numbers;
// var specialCharacters;
// var passlength;

  var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharactersArr = [" ", "!",`"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@","[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// var array = specialCharacters.concat(uppercase, lowercase, numbers);
  // generate prompt qs

function generatePassword() {
   var lengthch = prompt("The password must be between 8 and 128 characters in length");
   while (lengthch > 128 || lengthch < 8) {
    alert("Please enter a number between 8 and 128")
   var lengthch = prompt("The password must be between 8 and 128 characters in length");
  }
   var lowercasech = confirm("Do you want to include lowercase letters?");
   var  uppercasech = confirm("Do you want to include uppercase letters?");
   var  numbersch = confirm("Do you want to include numbers?");
   var specialCharactersch = confirm("Do you want to include special characters?");
   while (!lowercasech && !uppercasech && !numbersch && !specialCharactersch) {
    alert("Please select a feature.");
    var lengthch = prompt("The password must be between 8 and 128 characters in length");
    var lowercasech = confirm("Do you want to include lowercase letters?");
    var  uppercasech = confirm("Do you want to include uppercase letters?");
    var  numbersch = confirm("Do you want to include numbers?");
    var specialCharactersch = confirm("Do you want to include special characters?");
   };
  



     var passArr = []
  if (lowercasech) {
     var passArr = passArr.concat(lowercaseArr);
  }
  if (uppercasech) {
     var passArr = passArr.concat(uppercaseArr);
  }
  if (numbersch) {
     var passArr = passArr.concat(numbersArr);
  }
  if (specialCharactersch) {
     var passArr = passArr.concat(specialCharactersArr);
  }

var password = ""
for (var i = 0; i < lengthch; i++) {
  password = password += passArr[Math.floor(Math.random() * passArr.length)];
}
  return password

}

// console.log(passArr);



generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};



