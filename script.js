'use strict';
let modalWindow = document.querySelector('.modal-window');
let overlay = document.querySelector('.overlay');

let btnCloseModalWindow = document.querySelector('.close-modal-window');
let btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

function closeModalWindow() {
   modalWindow.classList.add('hidden');
   overlay.classList.add('hidden');
};

function showModalWindow() {
   modalWindow.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

for(let i = 0; i < btnsShowModalWindow.length; i++) {
btnsShowModalWindow[i].addEventListener('click', showModalWindow);
};

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function(event) {

   if (event.key === 'Escape' &&!modalWindow.classList.contains('hidden')) {
         closeModalWindow();
   }
});

