const showBtns = document.querySelector('.btns');
const modalWindow = document.querySelector('.modal-window');
const closeModalBtn = document.querySelector('.close-modal');

showBtns.addEventListener('click', function () {
  modalWindow.classList.add('show');
});
