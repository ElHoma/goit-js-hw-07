import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const imgList = document.querySelector(`.gallery`);

galleryItems.forEach(function (item) {
  let imgAtt = item.original;

  const listItem = document.createElement(`li`);
  listItem.classList.add("gallery__item");

  const itemLink = document.createElement(`a`);
  itemLink.classList.add("gallery__link");
  itemLink.href = imgAtt;

  const itemImage = document.createElement(`img`);
  itemImage.classList.add("gallery__image");
  itemImage.src = item.preview;
  itemImage.alt = item.description;

  itemLink.appendChild(itemImage);

  listItem.appendChild(itemLink);

  imgList.appendChild(listItem);
});

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
});
