import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

// Виклик функції, яка створює строки з картинками
const cardMarkup = createGalleryMarkup(galleryItems);

// Додавання в HTML строк з картинками
galleryEl.insertAdjacentHTML('beforeend', cardMarkup);

// Делегування собитий на спільний div
galleryEl.addEventListener('click', onTagsContainerClick);


// Колбек-функція, яка створює строки з картинками(данні для картинок з об'єкту galleryItems)
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`  }).join('');
}
function onTagsContainerClick(event) {

    // відміняє видкриття нового вікна за замовчуванням (тому що картинки обернуті в посилання)
    event.preventDefault();
 
   
    }