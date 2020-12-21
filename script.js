// Assignment code here
// Initializing the Password Object
var passwordObj = {
  length: 0,
  lowerCase: false,
  upperCase: false,
  numeric: false,
  specialChars: false
};

// Gets the length of the password 
function getLength() {
  debugger;
  var passwordLength = window.prompt("How many characters does your password need to be? Please select a number between 8 and 128.");
  // If user input is null or "" then re-run getLength()
  if (!passwordLength) {
    // Message indicating what is wrong with the input
    alert("You must enter a number between 8 and 128. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  // If user input is less than 8 then rerun getLength()
  else if (passwordLength < 8) {
    // Message indicating what is wrong with the input
    alert("Your password must be more than 8 characters long. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  // If user input is greater than 128 then rerun getLength()
  else if (passwordLength > 128) {
    // Message indicating what is wrong with the input
    alert("Your password must be less than 128 characters. Try again.");
    // Recursive call to re-run the function
    getLength();
  }
  else {
    // Ensure the length is an integer rather than a string.
    parseInt(passwordLength);
    // Set the value of length in the password object.
    passwordObj.length = passwordLength;
  }
};

// This function is used to collect the character types the user would like to use in their password.
// This will also validate that at least one character type has been chosen.
function getCharType() {
  // Confirmation messages to set each character type to either true or false.
  var lowerCase = window.confirm("Do you want to include LOWER CASE letters in your password?");
  var upperCase = window.confirm("Do you want to include UPPER CASE letters in your password?");
  var numeric = window.confirm("Do you want to include NUMBERS in your password?");
  var specialChars = window.confirm("Do you want to include SPECIAL CHARACTERS in your password?");
  //The case when all character types have a value of false
  if (!lowerCase &&
    !upperCase &&
    !numeric &&
    !specialChars) {
    //Alerts the user they must select one type.
    alert("You must select at least one character type.")
    //recursively run getCharType until at least one type has been chosen.
    getCharType();
  }
  // This will set the value in the password object for each character type.
  else {
    passwordObj.lowerCase = lowerCase;
    passwordObj.upperCase = upperCase;
    passwordObj.numeric = numeric;
    passwordObj.specialChars = specialChars;
  }
}

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
  // Selects a random integer between 0 and 25.
  var randomize = Math.floor(Math.random() * 26);
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
  getLength();
  getCharType();
  // This initializes the full password as an empty string.
  var fullPassword = "";
  // For loop to generate enough password characters to satisfy the user input.
  for (var i = 0; i < passwordObj.length; i++) {
    // Run the selectRandomChar function to get a password character to add to our password.
    var passwordChar = selectRandomChar();
    // In the case where selectRandomChar() generated an empty string 
    while (!passwordChar) {
      // Run the function again to ensure we have one password char for each iteration of the for loop.
      passwordChar = selectRandomChar();
    }
    //This concatenates the newest character onto the string of previous characters.
    fullPassword = fullPassword + passwordChar;

  }
  // return the fullPassword with all the password chararacters concatenated together.
  return fullPassword;

};

function selectRandomChar() {
  // Randomly select an integer 1 - 4. 
  // This will randomly select the character type for passwordChar.
  var randomize = (Math.floor(Math.random() * 4) + 1);
  // Using the randomize variable we select the character type.
  switch (randomize) {
    case 1:
      // If this character type is set to true
      if (passwordObj.lowerCase) {
        // generate a random letter using the getRandomLetter function defined above.
        var randomChar = getRandomLetter();
      }
      // Putting the break here ensures that whether or not randomChar is set 
      // the switch statement breaks. 
      break;
    case 2:
      if (passwordObj.upperCase) {
        var randomChar = getRandomUpperCaseLetter();
      }
      break;
    case 3:
      if (passwordObj.numeric) {
        var randomChar = getRandomInt();
      }
      break;
    case 4:
      if (passwordObj.specialChars) {
        var randomChar = getRandomSpecialChar();
      }
      break;
    default:
      // This case should never hit, but just in case we've set the randomChar to "".
      var randomChar = "";
  }
  //Return the randomized character, or ""
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
