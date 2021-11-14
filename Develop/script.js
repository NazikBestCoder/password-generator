// Assignment Code 
var generateBtn = document.querySelector("#generate");
var uppercase;
var lowercase;
var numbers;
var specialCharacters;
var passwordLength;

// generate prompt qs
generateBtn.addEventListener("click", choose);
function choose() {
  lowercase = confirm("Do you want to include lowercase letters?");
  uppercase = confirm("Do you want to include uppercase letters?");
  numbers = confirm("Do you want to include numbers?");
  specialCharacters = confirm("Do you want to include special characters?");
  if (!lowercase && !uppercase && !numbers && !specialCharacters) {
    alert("Please select at least one character type.");
    criteria();
} else {
    passlength();
}
}
function passlength() {
passlength = prompt("The password must be between 8 and 128 characters in length");
if (passwordLength > 128 || passwordLength < 8) {
  alert("Please enter a number between 8 and 128")
  passlength();
} else {
  generatePassword();
}

}



let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacters = [" ", "!",`"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@","[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let Array = specialCharacters.concat(uppercase, lowercase, numbers);










// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   // Creates element based on tag entered by user
//   var tag = document.createElement(tagName);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
//   // Appends tag as child of document body
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");

// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
//     document.body.appendChild(secondTag);












