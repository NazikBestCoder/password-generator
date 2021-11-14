// Assignment Code 
var generateBtn = document.querySelector("#generate");
var uppercase;
var lowercase;
var numbers;
var specialCharacters;
var passwordLength;

// generate prompt qs
generateBtn.addEventListener("click", prompt);
function prompt() {
  lowercase = confirm("Do you want to include lowercase letters?");
  uppercase = confirm("Do you want to include uppercase letters?");
  numbers = confirm("Do you want to include numbers?");
  specialCharacters = confirm("Do you want to include special characters?");
  if (!lowercase && !uppercase && !numbers && !specialCharacters) {
    alert("Please select at least one character type.");
    criteria();
} else {
    length();
}
}















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












