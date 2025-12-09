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
      const itemId = item.getAttribute("id");
      if (obj["name"] === item.textContent.toLowerCase()) {
        const themeMsg = document.getElementById("theme-message");
        themeMsg.textContent = obj["message"];
      }
    }
  });
});
