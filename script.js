// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
// get user input options 
let pText = document.querySelector("#password");

let userInput = [];

let userOptions = [];

let password = "";

// Function to prompt user for password options
function getPasswordOptions() { password =""; 
let passwordCharacterChoice = prompt ( "Input the number of desired characters between minimal 10 and maximum 64", "");
pLength = parseInt(passwordCharacterChoice, 0);
  if (pLength >= 10 && pLength <=64) {alert(`You selected ${pLength}`); 
  userInput.push({ PasswordLength: pLength }); } else { alert("Incorrect character amount, Re-enter character amount")}
  
  if (pLength >= 10 && pLength <= 64) {
    let lowerCharacter = confirm("Password to contain lowercase characters? Ok for yes and Cancel for no");
        if (lowerCharacter) {userOptions.push(lowerCasedCharacters);}
    let upperCharacter = confirm("Password to contain uppercase characters? Ok for yes and Cancel for no");
        if (upperCharacter) {userOptions.push(upperCasedCharacters);}
    let specialCharacter = confirm("Password to contain special characters? Ok for yes and Cancel for no");
        if (specialCharacter) {userOptions.push(specialCharacters);}
    let numericCharacter = confirm("Password to contain numeric characters? Ok for yes and Cancel for no");
        if (numericCharacter) {userOptions.push(numericCharacters);}
    

    if (userOptions.length === 0) {
        alert ("Select at least one option to generate a password");
        getPasswordOptions();
      } else {
        generatePassword();
        userOptions = [];
      }
    }
  }

// Function for getting a random element from an array
function getRandom(ar) { return ar[Math.floor(Math.random() * ar.length)];
}

// Function to generate password with user input
function generatePassword() {
    for (let i = 0; i < this.pLength; i++) {userOptions = userOptions.flat();
      password += getRandom(userOptions);
    }
  }
// Get references to the #generate element
  const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { getPasswordOptions();
    pText.textContent = password; }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);