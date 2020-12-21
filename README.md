# Password Generator Starter Code

This challenge required the use of JavaScript to make a password generator. The HTML and CSS were already provided as part of the starter code.

## Description

This challenge relied heavily on the Math.random() function. I used this to randomize selection of character types as well as the characters themselves.

### Acceptance Criteria
The Acceptance Criteria for this challenge was the following:

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page.

## Additional Information
### Mock up
One of the tricky bits of this challenge was using a global Password Object to capture the user's answers to character types while also getting the prompts to fire upon clicking the Generate button rather than when the page loads.

Below are some screenshots showing what the application looks like in use:

![Upon Loading](./assets/images/MockUp.png?raw=true "mockup")

![Prompt](./assets/images/Prompt.png?raw=true "prompt")

![Password Display](./assets/images/PasswordDisplay.png?raw=true "password display")

### Notes
I randomized the character selection so there is an outside chance that even though a user selected all four character types (lowerCase, upperCase, numeric, and special character) there could be a situation where no characters of a particular type make it into the password. I think this is an edge case, but I did not create a check once the password was created to ensure all character types set to true in the password object were present in the final password. 

### Access Application
You can find the Password Generator here:
* https://isibee.github.io/password-challenge/

You can find the code here:
* https://github.com/IsiBee/password-challenge
