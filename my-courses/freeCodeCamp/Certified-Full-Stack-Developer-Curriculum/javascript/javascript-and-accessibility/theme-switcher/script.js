const themes = [
  { name: "light", message: "May the Force be with you! - Light theme is on!" },
  { name: "dark", message: "No, I am your father! - Dark theme is on!" },
  { name: "high-contrast", message: "Every pixel designed to be seen, not guessed - High contrast theme is on!" },
  { name: "matrix", message: "There is no spoon - Matrix theme is on!" },
];

const switchThemeBtn = document.getElementById("theme-switcher-button");

const themeDropdown = document.getElementById("theme-dropdown");

switchThemeBtn.addEventListener("click", () => {
  if (switchThemeBtn.getAttribute("aria-expanded") === "false") {
    themeDropdown.removeAttribute("hidden");
    switchThemeBtn.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "true");
    switchThemeBtn.setAttribute("aria-expanded", "false");
  }
});

const themeMenuItem = document.querySelectorAll('[role="menuitem"]');

themeMenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    for (let obj of themes) {
      if (obj["name"] === item.textContent.toLowerCase()) {
        const themeMsg = document.getElementById("status");
        themeMsg.textContent = obj["message"];
      }
    }
    const body = document.querySelector("body");
    if (item.getAttribute("id") === "theme-light") {
      body.setAttribute("class", "theme-light");
    } else if (item.getAttribute("id") === "theme-dark") {
      body.setAttribute("class", "theme-dark") ;
    } else if (item.getAttribute("id") === "theme-high-contrast") {
      body.setAttribute("class", "theme-high-contrast")
    } else {
      body.setAttribute("class", "theme-matrix")
    }
  });
});
