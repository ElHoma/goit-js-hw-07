import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(`.gallery`);

function galleryAnimation(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: `alt`,
    captionDelay: 250,
  });
}

imgList.addEventListener(`click`, galleryAnimation);
