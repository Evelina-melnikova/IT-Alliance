const popupOpenButtonMenu = document.querySelector('.header_menu');
const popupOpenButtonLangs = document.querySelector('.header_langs');

const popupCloseButton = document.querySelector('.popup__close-button')
const popupLangs = document.querySelector('.popup_langs');
const popupMenu = document.querySelector('.popup_menu')

 function openPopup(popup) {
    popup.classList.add('popup_opened');
    // document.addEventListener('keydown', closepopupEsc)
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

const openButtonPopupLangs = function () {
    openPopup(popupLangs);
};

const openButtonPopupMenu = function () {
    openPopup(popupMenu);
};


const closeButtonPopupLangs = function () {
    closePopup(popupLangs);
};

const closeButtonPopupMenu = function () {
    closePopup(popupMenu);
};


// const closeButtonPopupMenu = function () {
//     closePopup(popupMenu);
// }




popupCloseButton.addEventListener('click', closeButtonPopupLangs);
popupCloseButton.addEventListener('click', closeButtonPopupMenu);
popupOpenButtonMenu.addEventListener('click', openButtonPopupMenu);
popupOpenButtonLangs.addEventListener('click', openButtonPopupLangs);





