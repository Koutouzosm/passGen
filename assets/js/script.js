// Assignment Code
// Defining variables for password criteria
// var upperCase = ['a,b,c,d,e,f,g,h,'].split(',')
// var lowerCase = ['a,b,c,d,e,f,g,h,'].split(',')
// var specChar = ['!', '@']//etc......
// var numbers = ['1', '2',]//etc.....

//create a function to prompt user for password options
function passOptions() {

//Variable to store my user password length which needs to be between 8 and 128 characters 13 (13 RANDOM characters)
var length  = parseInt(
  prompt('How many characters would you like your password to be?')
);
// console.log(length)

// checking to make sure user inputs a NUMERIC value
if (Number.isNaN(length)) {
  alert('Password must be a numeric number');
  return null;
}

// conditional to check if user enters a number 8 and greater
if (length < 8) {
  alert('Pass length has to be 8 or more');
  return null;
}

// conditional to check if user enters a number less than 128
if (length > 128) {
  alert('Pass length must be less than 128');
  return null;
}

//Conditional statements to check weather a user wants lower, upper, numbers, or special characters.
var hasLowerCase = confirm('Would you like to include lower case letters.');
var hasUpperCase = confirm('Would you like to include upper case letters.');
var hasSpecChar = confirm('Would you like to include special.');
var hasNumbers = confirm('Would you like to include numbers.');

// Create a conditional to make sure atleast one character type is selected
if (
hasLowerCase === false &&  
hasUpperCase === false && 
hasSpecChar === false && 
hasNumbers === false 
) {
  alert('Must choose one char type')
  return null;
}

//Object to store user inputs
var passwordOptions = {
  length: length,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasSpecChar: hasSpecChar,
  hasNumbers: hasNumbers
};


console.log(passwordOptions)
return passwordOptions


}


function runMyApp() {
  passOptions();
}

runMyApp();










var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
