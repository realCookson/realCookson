const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const headingOneRegex = /^#\s(.*)/gm; //Markdown: # heading 1
const headingTwoRegex = /^##\s(.*)/gm; //Markdown: ## heading 2
const headingThreeRegex = /^###\s(.*)/gm; //Markdown: ### heading 3
const boldRegex = /(\*\*|__)(.*?)\1/gm; //Markdown: **bold text** or __bold text__
const italicRegex = /(\*|_)(.*?)\1/gm; //Markdown: *italic text* or _italic text_
const imgRegex = /!\[(.*?)\]\((.*?)\)/gm; //Markdown: ![alt-text](image-source)
const linkRegex = /\[(.*?)\]\((.*?)\)/gm; //Markdown: [link text](URL)
const quoteRegex = /^> (.*)/gm; //Markdown: > quote

function convertMarkdown() {
  const userInput = markdownInput.value;
  let result = userInput;

  if (headingOneRegex.test(result)) {
    result = result.replaceAll(headingOneRegex, "<h1>$1</h1>");
  }

  if (headingTwoRegex.test(result)) {
    result = result.replaceAll(headingTwoRegex, "<h2>$1</h2>");
  }

  if (headingThreeRegex.test(result)) {
    result = result.replaceAll(headingThreeRegex, "<h3>$1</h3>");
  }

  if (boldRegex.test(result)) {
    result = result.replaceAll(boldRegex, "<strong>$2</strong>");
  }

  if (italicRegex.test(result)) {
    result = result.replaceAll(italicRegex, "<em>$2</em>");
  }

  if (imgRegex.test(result)) {
    result = result.replaceAll(imgRegex, `<img alt="$1" src="$2">`);
  }

  if (linkRegex.test(result)) {
    result = result.replaceAll(linkRegex, `<a href="$2">$1</a>`);
  }

  if (quoteRegex.test(result)) {
    result = result.replaceAll(quoteRegex, "<blockquote>$1</blockquote>");
  }

  htmlOutput.textContent = result;
  return (htmlPreview.innerHTML = htmlOutput.textContent);
}

markdownInput.addEventListener("input", () => {
  convertMarkdown();
});
