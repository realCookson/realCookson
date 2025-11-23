function convertHTML(string) {
  for (let char of string) {
    if (char === "&") {
      string = string.replace("&", "&amp;");
    } else if (char === "<") {
      string = string.replace("<", "&lt;");
    } else if (char === ">") {
      string = string.replace(">", "&gt;");
    } else if (char === `"`) {
      string = string.replace(`"`, "&quot;");
    } else if (char === "'") {
      string = string.replace("'", "&apos;");
    }
  }
  return string;
}

console.log(convertHTML("Dolce & Gabbana"));
