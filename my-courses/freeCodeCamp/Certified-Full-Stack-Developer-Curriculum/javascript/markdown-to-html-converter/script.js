const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");

const headingOneRegex = /^#\s(.*)/;
const headingTwoRegex = /^##\s(.*)/;
const headingThreeRegex = /^###\s(.*)/;
const boldRegex = /^(\*\*|__)(.*?)\1$/;
const italicRegex = /^(\*|_)(.*?)\1$/;
const imgRegex = /x/;
const linkRegex = /x/;
const quoteRegex = /x/;

function convertMarkdown() {
  const userInput = markdownInput.value;
  console.log(boldRegex.test(userInput));
  if (headingOneRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(headingOneRegex, "<h1>$1</h1>");
  } else if (headingTwoRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(headingTwoRegex, "<h2>$1</h2>");
  } else if (headingThreeRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      headingThreeRegex,
      "<h3>$1</h3>"
    );
  } else if (boldRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      boldRegex,
      "<strong>$2</strong>"
    );
  } else if (italicRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(italicRegex, "<em>$2</em>");
  } else {
    htmlOutput.textContent = "";
  }
}

markdownInput.addEventListener("input", () => {
  convertMarkdown();
});
