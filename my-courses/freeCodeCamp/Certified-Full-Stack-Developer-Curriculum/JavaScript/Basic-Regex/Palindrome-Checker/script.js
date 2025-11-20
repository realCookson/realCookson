const userInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

let userInputReverse = "";

function reverseText(text) {
  const userInput = text;
  let y = 0;
  for (let i = 1; i < userInput.length + 1; i++) {
    userInputReverse =
      userInputReverse +
      userInput.slice(userInput.length - i, userInput.length - y);
    y++;
  }
  return userInputReverse;
}

function isPalindrome(text) {
  userInputReverse = reverseText(text);
  if (text === userInputReverse) {
    userInputReverse = "";
    return true;
  } else {
    userInputReverse = "";
    return false;
  }
}

checkBtn.addEventListener("click", () => {
  const rawInput = userInput.value;
  const regex = /\s|_|\W|/gi;
  const cleanedInput = rawInput.replaceAll(regex, "");
  console.log(cleanedInput.toLowerCase());
  if (userInput.value === "") {
    alert("Please input a value");
  } else if (isPalindrome(cleanedInput.toLowerCase())) {
    result.innerHTML = `<span id="result-input-value">${userInput.value}</span> is a palindrome`;
    result.style.display = "inline";
  } else {
    result.innerHTML = `<span id="result-input-value">${userInput.value}</span> is not a palindrome`;
    result.style.display = "inline";
  }
});
