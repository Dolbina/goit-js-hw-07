import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

// Знаходження div, в який буде додана галерея
const galleryEl = document.querySelector('.gallery');


// Виклик функції, яка створює строки з картинками
const cardMarkup = createGalleryMarkup(galleryItems);

// Додавання в HTML строк з картинками
galleryEl.insertAdjacentHTML('beforeend', cardMarkup);

// Делегування собитий на спільний div
galleryEl.addEventListener('click', onTagsContainerClick);



// Колбек-функція, яка створює строки з картинками(данні для картинок з об'єкту galleryItems)
function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
 return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
   </a>
 </div>`
    }).join('');
}


// Колбек-функція, 
function onTagsContainerClick(event) {

    // відміняє видкриття нового вікна за замовчуванням (тому що картинки обернуті в посилання)
    event.preventDefault();
 
    // перевірка, що клік по картинці
    if (event.target.nodeName !== "IMG") {
        return;
    }

    // знаходження URL картинки великого розміру
    const gallaryElOriginal = event.target.getAttribute("data-source");
    console.log(gallaryElOriginal);
    
    // шаблонна сторока (данні з бібліотеки)
    const gallaryElOriginalCreate = basicLightbox.create(`
    <img src="${gallaryElOriginal}" width="800" height="600">
`,
        
        {
            onShow: () => {
                document.addEventListener("keydown", onCloseModal);
            },
        
            onClose: () => {
                document.removeEventListener("keydown", onCloseModal);
            },
        }
    );
    
    gallaryElOriginalCreate.show();
// зачиненя модального вікна за допомогою клавиши Escape
    
    function onCloseModal(event) {
        if (event.key === "Escape") {
            gallaryElOriginalCreate.close();
        }
    }
}






 




