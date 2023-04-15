const showBtns = document.querySelectorAll('.btn');
const modalWindow = document.querySelector('.modal-window');
const closeModalBtn = document.querySelector('.close-modal');

showBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modalWindow.classList.add('show');
  });
});

closeModalBtn.addEventListener('click', function () {
  modalWindow.classList.add('hide');
  window.location.reload();
});
