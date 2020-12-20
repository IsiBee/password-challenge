// Assignment code here
var passwordObj = {
  length: getLength(),
  lowerCase: window.confirm("Do you want to include LOWER CASE letters in your password?"),
  upperCase: window.confirm("Do you want to include UPPER CASE letters in your password?"),
  numeric: window.confirm("Do you want to include NUMBERS in your password?"),
  specialChars: window.confirm("Do you want to include SPECIAL CHARACTERS in your password?"),
  validate: function () {
    if (!this.lowerCase &&
      !this.upperCase &&
      !this.numeric &&
      !this.specialChars) {
      alert("You must select at least one character type.")
      this.lowerCase = window.confirm("Do you want to include LOWER CASE letters in your password?");
      this.upperCase = window.confirm("Do you want to include UPPER CASE letters in your password?");
      this.numeric = window.confirm("Do you want to include NUMBERS in your password?");
      this.specialChars = window.confirm("Do you want to include SPECIAL CHARACTERS in your password?");
    }
  }
};

// Gets the length of the password 
function getLength() {
  var passwordLength = window.prompt("How many characters does your password need to be? Please select a number between 8 and 128.");
  // If user input is null or "" then re-run getLength()
  if (!passwordLength) {
    // Message indicating what is wrong with the input
    passwordLength = alert("You must enter a number between 8 and 128. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  // If user input is less than 8 then rerun getLength()
  else if (passwordLength < 8) {
    // Message indicating what is wrong with the input
    passwordLength = alert("Your password must be more than 8 characters long. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  // If user input is greater than 128 then rerun getLength()
  else if (passwordLength > 128) {
    // Message indicating what is wrong with the input
    passwordLength = alert("Your password must be less than 128 characters. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  else {
    // Returns the user input. 
    return passwordLength;
  }
};

// Gets a random integer between 0 and 9 inclusive.
function getRandomInt() {
  // Selects a random integer between 0 and 9.
  var randomInt = Math.floor(Math.random() * 10);
  // Returns the value of the random Integer.
  var number = randomInt.toString();
  return number;
};

// Gets a random lowercase letter between a and z.
function getRandomLetter() {
  // Selects a random integer between 0 and 26.
  var randomize = Math.floor(Math.random() * 27);
  // Converts a number into a character between a and z.
  var randomLetter = String.fromCharCode(97 + randomize);
  // Returns the value of the random letter.
  return randomLetter;
};

function getRandomUpperCaseLetter() {
  // Calls the getRandomLetter function to get a random lowercase letter.
  // Then converts the random letter to upper case using a built in function.
  var upperLetter = getRandomLetter().toUpperCase();
  // Returns the value of the upper Case letter.
  return upperLetter;
};

function getRandomSpecialChar() {
  // There are 4 possible ranges of ASCII characters that can be special characters.
  // First randomly select one of the four ranges 
  var randomize = (Math.floor(Math.random() * 4) + 1);
  switch (randomize) {
    case 1:
      // This will randomly choose an integer between 32 and 47
      var randomNum = (Math.floor(Math.random() * 16) + 32);
      break;
    case 2:
      // This will randomly choose an integer between 58 and 64
      var randomNum = (Math.floor(Math.random() * 7) + 58);
      break;
    case 3:
      // This will randomly choose an integer between 91 and 96
      var randomNum = (Math.floor(Math.random() * 6) + 91);
      break;
    case 4:
      // this will ranomly choose an integer between 123 and 126.
      var randomNum = (Math.floor(Math.random() * 4) + 123);
      break;
    default:
      // We should never hit this case because randomize can only be integers 1 through 4.
      alert("Something is amiss, this case should not be possible.");
  }
  // Turns the number into the ASCII special character
  var spchar = String.fromCharCode(randomNum);
  // Returns the special character
  return spchar;

}

function generatePassword() {
  // This ensures at least one character type has been chosen.
  passwordObj.validate();
  // This initializes the full password as an empty string.
  var fullPassword = "";
  for (var i = 0; i < passwordObj.length; i++) {
    var passwordChar = selectRandomChar();
    while (!passwordChar) {
      passwordChar = selectRandomChar();
    }
    //This concatenates the newest character onto the string of previous characters.
    fullPassword = fullPassword + passwordChar;

  }
  return fullPassword;

};

function selectRandomChar() {
  // Randomly select an integer 1 - 4. 
  // This will randomly select the character type.
  var randomize = (Math.floor(Math.random() * 4) + 1);
  switch (randomize) {
    case 1:
      if (passwordObj.lowerCase) {
        var randomChar = getRandomLetter();
        break;
      }
    case 2:
      if (passwordObj.upperCase) {
        var randomChar = getRandomUpperCaseLetter();
        break;
      }

    case 3:
      if (passwordObj.numeric) {
        var randomChar = getRandomInt();
        break;
      }
    case 4:
      if (passwordObj.specialChars) {
        var randomChar = getRandomSpecialChar();
        break;
      }
    default:
      var randomChar = "";
  }
  return randomChar;
}


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
