'use strict';

const select = selector => document.querySelector(selector);
const selectAll = selector => document.querySelectorAll(selector);

const showBtns = selectAll('.btn');
const modalWindow = select('.modal-window');
const closeModalBtn = select('.close-modal');
const overlay = select('.overlay');

const showModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

showBtns.forEach(btn => btn.addEventListener('click', showModal));

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
