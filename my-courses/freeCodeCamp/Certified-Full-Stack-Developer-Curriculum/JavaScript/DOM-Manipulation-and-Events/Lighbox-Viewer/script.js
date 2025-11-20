const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector("#close-btn");
const lightboxImage = document.getElementById("lightbox-image");

function openLightbox(item) {
  const clickedGalleryItem = item.target;
  lightbox.style.display = "flex";
  const lightboxImageSrc = clickedGalleryItem.src.replace(`-thumbnail`, ``);
  console.log(lightboxImageSrc);
  lightboxImage.src = lightboxImageSrc;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

galleryItems.forEach((item) => {
  item.addEventListener("click", openLightbox);
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", closeLightbox);

lightboxImage.addEventListener("click", (event) => {
  event.stopPropagation();
});
