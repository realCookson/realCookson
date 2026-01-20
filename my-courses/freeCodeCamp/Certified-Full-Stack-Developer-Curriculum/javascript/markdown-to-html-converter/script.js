const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const headingOneRegex = /^#\s(.*)/gm; //Markdown: # heading 1
const headingTwoRegex = /^##\s(.*)/gm; //Markdown: ## heading 2
const headingThreeRegex = /^###\s(.*)/gm; //Markdown: ### heading 3
const boldRegex = /^(\*\*|__)(.*?)\1$/gm; //Markdown: **bold text** or __bold text__
const italicRegex = /^(\*|_)(.*?)\1$/gm; //Markdown: *italic text* or _italic text_
const imgRegex = /^!\[(.*?)\]\((.*?)\)/gm; //Markdown: ![alt-text](image-source)
const linkRegex = /^\[(.*?)\]\((.*?)\)/gm; //Markdown: [link text](URL)
const quoteRegex = /^>\s(.*)/gm; //Markdown: > quote

function convertMarkdown() {
  const userInput = markdownInput.value;
  if (headingOneRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(headingOneRegex, "<h1>$1</h1>");
  } else if (headingTwoRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(headingTwoRegex, "<h2>$1</h2>");
  } else if (headingThreeRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      headingThreeRegex,
      "<h3>$1</h3>",
    );
  } else if (boldRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      boldRegex,
      "<strong>$2</strong>",
    );
  } else if (italicRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(italicRegex, "<em>$2</em>");
  } else if (imgRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      imgRegex,
      `<img alt="$1" src="$2">`,
    );
  } else if (linkRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      linkRegex,
      `<a href="$2">$1</a>`,
    );
  } else if (quoteRegex.test(userInput)) {
    htmlOutput.textContent = userInput.replace(
      quoteRegex,
      "<blockquote>$1</blockquote>",
    );
  } else {
    htmlOutput.textContent = "";
  }
  htmlPreview.innerHTML = htmlOutput.textContent;
}

markdownInput.addEventListener("input", () => {
  convertMarkdown();
});
