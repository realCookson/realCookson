let textInput = document.querySelector("#text-input");
const count = document.querySelector("#char-count");

function handleCharacterCount(numOfChar) {
  numOfChar = textInput.value.length;
  console.log(numOfChar);
  if (numOfChar === 0) {
    count.textContent = `Character Count: 0/50`;
  } else if (numOfChar >= 50) {
    count.textContent = `Character Count: 50/50`;
    count.style.color = "red";
    textInput.value = textInput.value.slice(0, 50);
  } else {
    count.textContent = `Character Count: ${numOfChar}/50`;
    count.style.color = "var(--brunswickGreen)";
  }
}

textInput.addEventListener("input", handleCharacterCount);
