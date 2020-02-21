// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //password obtained through 'generatePassword' function 

  var passwordText = document.querySelector("#password"); //password to appear in HTML element with #password selector

  passwordText.value = password;

}

function generatePassword(lower, upper, numbers, symbols, length) {

  //password criteria options
  var lwr = "abcdefghijklmnopqrstuvwxyz";
  var upr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "1234567890";
  var sym = "!@#$%^&*()-?><:;[{]}";
  var pool = ""; //To pool strings 'lwr','upr','num' and 'sym' from  which password will be generated.
  var password = "";

  //alert boxes pop up with password critera when #generate button pressed
  var lower = confirm("Do you want lower case letters?")
  var upper = confirm("Do you want upper case letters?")
  var numbers = confirm("Do you want numbers?")
  var symbols = confirm("Do you want special symbols?")

  //If no character types are selected, user will be prompted again.
  while ((lower === false) && (upper === false) && (numbers === false) && (symbols === false)) {
    alert("You not chosen any character types, please choose at least one.");
    var lower = confirm("Do you want lower case letters?")
    var upper = confirm("Do you want upper case letters?")
    var numbers = confirm("Do you want numbers?")
    var symbols = confirm("Do you want special symbols?")
  }

  //User must select password length
  var length = prompt("How long do you want your password to be?")

  //password length between 8 and 128 
  while (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128.")
    var length = prompt("How long do you want your password to be?")
  }

  //User to choose if they wish to continue with chosen criteria, if false then 
  var validate = confirm("You have chosen:  " +
    "  Upper case: " + lower +
    "  , Lower Case: " + upper +
    "  , Numbers: " + numbers +
    "  , Special symbols: " + symbols +
    "  , Password length: " + length);

  if (validate === false) {
    generatePassword()
  }

  //CONDITIONS TO ADD STRINGS TO POOL
  //if user chooses lower case letters, string of lower case letters will be added to pool
  if (lower === true) {
    pool = pool + lwr
  }

  //if user chooses upper case letters, string of upper case letters will be added to pool
  if (upper === true) {
    pool = pool + upr
  }

  //if user chooses numbers, string of numbers will be added to pool
  if (numbers === true) {
    pool = pool + num
  }

  //if user chooses symbols, string of symbols will be added to pool
  if (symbols === true) {
    pool = pool + sym
  }

  //Loop function to randomly generate characters from 'pool'
  for (var i = 0; i < length; i++) {
    password = password + pool.charAt(Math.floor(Math.random() * pool.length))
  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
