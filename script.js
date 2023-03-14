// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const numeric = "0123456789";

const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters 
  const passwordLength = prompt("How long would you like your password?")


  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var askLowerCase = confirm("Do you want lowercase characters?");
  var askUpperCase = confirm("Do you want uppercase characters?");
  var askNumeric = confirm("Do you want numeric characters?");
  var askSpecial = confirm("Do you want special characters?");





  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (askLowerCase) {
    const randomIndex = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[randomIndex];
  }
  
  if (askUpperCase) {
    const randomIndex = Math.floor(Math.random() * upperCase.length);
    password += upperCase[randomIndex];
  }
  
  if (askNumeric) {
    const randomIndex = Math.floor(Math.random() * numeric.length);
    password += numeric[randomIndex];
  }
  
  if (askSpecial) {
    const randomIndex = Math.floor(Math.random() * symbol.length);
    password += symbol[randomIndex];
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria



  for (let i = 0; i < passwordLength; i++) {
    if (askLowerCase) {
      const randomIndex = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase[randomIndex];
    }
    
    if (askUpperCase) {
      const randomIndex = Math.floor(Math.random() * upperCase.length);
      password += upperCase[randomIndex];
    }
    
    if (askNumeric) {
      const randomIndex = Math.floor(Math.random() * numeric.length);
      password += numeric[randomIndex];
    }
    
    if (askSpecial) {
      const randomIndex = Math.floor(Math.random() * symbol.length);
      password += symbol[randomIndex];
    }
  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  return password;
}


