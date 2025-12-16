const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("test-btn");

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

testButton.addEventListener("click", getFlags);
