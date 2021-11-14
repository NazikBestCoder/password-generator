// Assignment Code 
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);












// var generatedBtn = document.querySelector("#generate");

// // var generatePassword() {

//   var userPrompt = window.prompt("Create a new password")

//   var lengthPrompt = prompt("Choose at least 8 character and not more than 128 as your length")
//   console.log(lengthPrompt);
//     if (lengthPrompt < 8 || lengthPrompt > 120) {
//       alert("length error")
//       return;
//   }
// }




// const characterAmountRange = document.getElementById('characterAmountRange')
// const characterAmountNumber = document.getElementById('characterAmountNumber')
// const includeUppercaseElement = document.getElementById('includeUppercase')
// const includeNumbersElement = document.getElementById('includeNumbers')
// const includeSymbolsElement = document.getElementById('includeSymbols')
// const form = document.getElementById('passwordGeneratorForm')
// const passwordDisplay = document.getElementById('passwordDisplay')

// const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
//   arrayFromLowToHigh(58, 64)
// ).concat(
//   arrayFromLowToHigh(91, 96)
// ).concat(
//   arrayFromLowToHigh(123, 126)
// )

// characterAmountNumber.addEventListener('input', syncCharacterAmount)
// characterAmountRange.addEventListener('input', syncCharacterAmount)

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const characterAmount = characterAmountNumber.value
//   const includeUppercase = includeUppercaseElement.checked
//   const includeNumbers = includeNumbersElement.checked
//   const includeSymbols = includeSymbolsElement.checked
//   const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
//   passwordDisplay.innerText = password
// })

// function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
//   let charCodes = LOWERCASE_CHAR_CODES
//   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
//   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
//   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
//   const passwordCharacters = []
//   for (let i = 0; i < characterAmount; i++) {
//     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
//     passwordCharacters.push(String.fromCharCode(characterCode))
//   }
//   return passwordCharacters.join('')
// }

// function arrayFromLowToHigh(low, high) {
//   const array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }

// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value





// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function  ord = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
