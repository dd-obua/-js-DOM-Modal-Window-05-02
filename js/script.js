'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const showBtns = selectAll('.btn');
const modalWindow = select('.modal-window');
const closeModalBtn = select('.close-modal');
const overlay = select('.overlay');

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
