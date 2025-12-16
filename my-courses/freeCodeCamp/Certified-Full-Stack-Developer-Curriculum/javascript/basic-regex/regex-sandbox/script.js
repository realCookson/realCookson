const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("test-btn");
const resultMsg = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  const iFlagStatus = caseInsensitiveFlag.checked;
  const gFlagStatus = globalFlag.checked;
  let result = "";
  if (iFlagStatus === true && gFlagStatus === false) {
    result = "i";
  } else if (iFlagStatus === false && gFlagStatus === true) {
    result = "g";
  } else if (iFlagStatus === true && gFlagStatus === true) {
    result = "gi";
  } else {
    result = "";
  }

  return result;
}

function handleRegexSandbox() {
  const userRegexPattern = new RegExp(regexPattern.value, getFlags());
  console.log(userRegexPattern);
  console.log(stringToTest.textContent);
  console.log(userRegexPattern.test(stringToTest.textContent));
  if (userRegexPattern.test(stringToTest.textContent) === true) {
    resultMsg.textContent = regexPattern.value;
    //TODO must define innerHTML
    //stringToTest.innerHTML =
    return;
  } else {
    return (resultMsg.textContent = "no match");
  }
}

testButton.addEventListener("click", handleRegexSandbox);
