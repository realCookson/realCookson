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
  result = result.replaceAll(headingOneRegex, "<h1>$1</h1>");
  result = result.replaceAll(headingTwoRegex, "<h2>$1</h2>");
  result = result.replaceAll(headingThreeRegex, "<h3>$1</h3>");
  result = result.replaceAll(boldRegex, "<strong>$2</strong>");
  result = result.replaceAll(italicRegex, "<em>$2</em>");
  result = result.replaceAll(imgRegex, `<img alt="$1" src="$2">`);
  result = result.replaceAll(linkRegex, `<a href="$2">$1</a>`);
  result = result.replaceAll(quoteRegex, "<blockquote>$1</blockquote>");
  if (result === userInput) {
    htmlOutput.textContent = ""; //basically if conversion wasn't made, then don't send output
  } else {
    htmlOutput.textContent = result;
  }
  console.log(`htmlOutput: ${htmlOutput.textContent}`);
  return (htmlPreview.innerHTML = htmlOutput.textContent);
}

markdownInput.addEventListener("input", () => {
  convertMarkdown();
});
