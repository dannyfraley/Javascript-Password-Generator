var generateBtn = document.querySelector("#generate");
var copyBtn = document.getElementById("copy");
var textCopy = document.getElementById("password");


generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("Generate password HERE");
  var length = Number(
    prompt("How long would you like this password? (Please choose a value from 8-128)")
  );

  console.log("User chose X Lenth: ", length);

  if(isNaN(length) === true){
    alert("Try again! Please choose a value between 8-128.");
    return;
  }

  if (length < 8) {
    alert("Try again! Please choose a value from 8-128.");
    return;
  }
  if (length > 128) {
    alert("Try again! Please choose a value from 8-128.");
    return;
  }
  
  
  var numerical = '0123456789';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var special = '~!@#$%^&*()"<>/_+-=?:;[]{}\|';
  var chosenCharacters = '';
  var password = '';
  
  var useNumerical = confirm('Would you like to use Numerical Characters?');
  var useLowerCase = confirm('Would you like to use Lower Case Characters?');
  var useUpperCase = confirm('Would you like to use Upper Case Characters?');
  var useSpecial = confirm('Would you like to use Special Characters?');

  console.log({useNumerical, useLowerCase, useUpperCase, useSpecial});

  if (useNumerical) {
    chosenCharacters+= numerical;
  }
  if (useLowerCase) {
    chosenCharacters+= lowerCase;
  }
  if (useUpperCase) {
    chosenCharacters+= upperCase;
  }
  if (useSpecial) {
    chosenCharacters+= special;
  }
  if (chosenCharacters === "") {
    alert("Please select at least one type of character you would like to include!");
  }

    for (var i = 0; i < length; i++) {
        password += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
        console.log("Password Char: "+password);
    }

    return password;
  }
 
function copyPassword() {
    textCopy.select();
    document.execCommand("copy");
    alert("Password has been copied to your clipboard!");
}

