// Assignment code here
var password = {
  length: getLength(),
  lowerCase: window.confirm("Do you want to include LOWER CASE letters in your password?"),
  upperCase: window.confirm("Do you want to include UPPER CASE letters in your password?"),
  numeric: window.confirm("Do you want to include NUMBERS in your password?"),
  specialChars: window.confirm("Do you want to include SPECIAL CHARACTERS in your password?")
};

function getLength() {
  var passwordLength = window.prompt("How many characters does your password need to be? Please select a number between 8 and 128.");
  if (!passwordLength){
    passwordLength = alert("You must enter a number between 8 and 128. Try again.");
    getLength();
  }
  else if(passwordLength < 8){
    passwordLength = alert("Your password must be more than 8 characters long. Try again.");
    getLength();
  }
  else if(passwordLength > 128){
    passwordLength = alert("Your password must be less than 128 characters. Try again.");
    getLength();
  }
};

function generatePassword() {
  
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
