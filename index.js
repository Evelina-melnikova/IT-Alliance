const popupOpenButtonMenu = document.querySelector('.header_menu');
const popupOpenButtonLangs = document.querySelector('.header_langs');
const popupCloseButtonMenu = document.querySelector('.popup__close-button-menu');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupLangs = document.querySelector('.popup_langs');
const popupMenu = document.querySelector('.popup_menu');

 function openPopup(popup) {
    popup.classList.add('popup_opened');
    // document.addEventListener('keydown', closepopupEsc)
};

const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
}; 

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupClosed = document.querySelector('.popup_opened');
        closePopup(popupClosed);
    };
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)

}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
}

const openButtonPopupLangs = function () {
    openPopup(popupLangs);
    document.addEventListener('keydown', closePopupEsc)
};

const openButtonPopupMenu = function () {
    openPopup(popupMenu);
    document.addEventListener('keydown', closePopupEsc)

};


const closeButtonPopupLangs = function () {
    closePopup(popupLangs);
};

const closeButtonPopupMenu = function () {
    closePopup(popupMenu);
};



popupCloseButton.addEventListener('click', closeButtonPopupLangs);
popupCloseButtonMenu.addEventListener('click', closeButtonPopupMenu);
popupOpenButtonMenu.addEventListener('click', openButtonPopupMenu);
popupOpenButtonLangs.addEventListener('click', openButtonPopupLangs);
popupMenu.addEventListener('mousedown', closeOverlayPopup)
popupLangs.addEventListener('mousedown', closeOverlayPopup)





