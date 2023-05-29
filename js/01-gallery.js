import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(`.gallery`);

function gallAnimation(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"></img>;
`);

  instance.show();
}

imgList.addEventListener(`click`, gallAnimation);
