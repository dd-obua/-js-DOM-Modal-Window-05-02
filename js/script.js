'use strict';

const showBtns = document.querySelectorAll('.btn');
const modalWindow = document.querySelector('.modal-window');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

showBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

const closeModalWindow = function (button) {
  button.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

closeModalWindow(closeModalBtn);
closeModalWindow(overlay);
