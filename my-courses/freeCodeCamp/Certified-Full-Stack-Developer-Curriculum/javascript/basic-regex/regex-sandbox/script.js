const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

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
  const spanHighlight = document.querySelector(".highlight");
  if (spanHighlight !== null) {
    stringToTest.innerHTML = `<div
          id="test-string"
          placeholder="Enter your test string"
          contenteditable="true"
        >${stringToTest.innerText}</div>`;
  }
  if (userRegexPattern.test(stringToTest.innerText) === true) {
    stringToTest.innerHTML = stringToTest.innerHTML.replace(
      userRegexPattern,
      (regexMatch) => {
        return (regexMatch = `<span class="highlight">${regexMatch}</span>`);
      }
    );
    if (userRegexPattern.flags.includes("g") === true) {
      let result = "";
      const regexMatch = stringToTest.innerText.match(userRegexPattern);
      for (const match of regexMatch) {
        result = result + ", " + match;
      }
      result = result.slice(2);
      testResult.innerText = result;
    } else {
      testResult.innerText = stringToTest.innerText.match(userRegexPattern)[0];
    }
    return;
  } else {
    return (testResult.innerText = "no match");
  }
}

testButton.addEventListener("click", handleRegexSandbox);
