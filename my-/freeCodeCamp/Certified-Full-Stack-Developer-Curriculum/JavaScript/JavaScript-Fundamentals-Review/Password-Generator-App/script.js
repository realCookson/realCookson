function generatePassword(length) {
  let randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let generatedPassword = "";
  for (let i = 1; i <= length; i++) {
    generatedPassword = generatedPassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  }
  return generatedPassword;
}

let password = generatePassword(10);

console.log(`Generated password: ${password}`);
