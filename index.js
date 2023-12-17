"use strict"
const popupOpenButtonMenu = document.querySelector('.header_menu');
const popupOpenButtonLangs = document.querySelector('.header_langs');
const popupCloseButtonMenu = document.querySelector('.popup__close-button-menu');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupLangs = document.querySelector('.popup_langs');
const popupMenu = document.querySelector('.popup_menu');

const configValidation = {
    formSelector: '.form',
    inputSelector: '.input',
    // submitButtonSelector: '.submit_button',
    // inputErrorClass: 'popup__input_type_error'
};

const closeOverlayPopup = function (evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
};


function openPopup(popup) {
    popup.classList.add('popup_opened');
    // document.addEventListener('keydown', closepopupEsc)
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


// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById("form");
//     // const formDesk = document.getElementById("formDesk");
//     form.addEventListener('submit', formSend);
//     // formDesk.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);

//         let formData = new FormData(form);

//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendEmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await response.json();
//                 alert(result.message)
//                 form.reset();
//                 form.classList.remove('_sending');
//             } else {
//                 alert('Ошибка');
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Заполните обязательные  поля!')
//         }
//     }



//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_number')) {
//                 if (numberTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//             return error;
//         }
//     }



//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }

//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }

//     function numberTest(input) {
//         return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);

//     }

// });


// // document.addEventListener('DOMContentLoaded', function () {
// //     const formDesk = document.getElementById("formDesk");
// //     formDesk.addEventListener('submit', formDeskSend);

// //     async function formDeskSend(e) {
// //         e.preventDefault();

// //         let error = formDeskValidate(formDesk);

// //         let formDataDesk = new FormData(formDesk);

// //         if (error === 0) {
// //             formDesk.classList.add('_sending');
// //             let response = await fetch('sendEmail.php', {
// //                 method: 'POST',
// //                 body: formDataDesk
// //             });
// //             if (response.ok) {
// //                 let result = await response.json();
// //                 alert(result.message)
// //                 formDesk.reset();
// //                 formDesk.classList.remove('_sending');
// //             } else {
// //                 alert('Ошибка');
// //                 formDesk.classList.remove('_sending');
// //             }
// //         } else {
// //             alert('Заполните обязательные  поля!')
// //         }
// //     }



// //     function formDeskValidate(formDesk) {
// //         let error = 0;
// //         let formReq = document.querySelectorAll('._req');

// //         for (let index = 0; index < formReq.length; index++) {
// //             const input = formReq[index];
// //             formDeskRemoveError(input);

// //             if (input.classList.contains('tel_input')) {
// //                 if (formDeskNumberTest(input)) {
// //                     formDeskAddError(input);
// //                     error++;
// //                 }
// //             } else {
// //                 if (input.value === '') {
// //                     formDeskAddError(input);
// //                     error++;
// //                 }
// //             }
// //             return error;
// //         }
// //     }



// //     function formDeskAddError(input) {
// //         input.parentElement.classList.add('_error');
// //         input.classList.add('_error');
// //     }

// //     function formDeskRemoveError(input) {
// //         input.parentElement.classList.remove('_error');
// //         input.classList.remove('_error');
// //     }

// //     function formDeskNumberTest(input) {
// //         return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);

// //     }

// // });



