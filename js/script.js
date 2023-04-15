'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const showBtns = selectAll('.btn');
const modalWindow = select('.modal-window');
const closeModalBtn = select('.close-modal');
const overlay = select('.overlay');

// Show modal
const showModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showBtns.forEach(btn => btn.addEventListener('click', showModal));

// Close modal
const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});
