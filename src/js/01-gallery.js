import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';





const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map((elem) => {

  return `<li class="gallery__item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image" src="${elem.preview}" alt="${elem.description}"/></a></li>`;
}).join('');


let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
  captionDelay: 250});