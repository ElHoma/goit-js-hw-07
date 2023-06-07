import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(`.gallery`);

galleryItems.forEach(function (item) {
  let imgOrig = item.original;
  let imgPrev = item.preview;
  let imgDesc = item.description;

  const template = `<li class="gallery__item">
  <a class="gallery__link" href="${imgOrig}">
    <img
      class="gallery__image"
      src="${imgPrev}"
      data-source="${imgOrig}"
      alt="${imgDesc}"
    />
  </a>
</li>`;

  const elem = document.createElement("li");
  elem.innerHTML = template;
  imgList.appendChild(elem);
});

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
