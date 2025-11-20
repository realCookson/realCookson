const heartButtons = document.querySelectorAll(".favorite-icon");

function makeFavoriteOrUnfavorite(event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains("filled") === false) {
    clickedButton.setAttribute("class", "favorite-icon filled");
    clickedButton.innerHTML = "&#10084";
  } else {
    clickedButton.setAttribute("class", "favorite-icon");
    clickedButton.innerHTML = "&#9825";
  }
}

heartButtons.forEach((arr) => {
  arr.addEventListener("click", makeFavoriteOrUnfavorite);
});
