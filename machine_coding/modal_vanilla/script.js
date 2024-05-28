document.addEventListener("DOMContentLoaded", function () {
   const modal = document.querySelector('.modal');

   modal.addEventListener('click', function (e) {
        const id = e.target.getAttribute('data-id');
        if (!id) return;
        if (id === 'bg' || id === 'close') {
            modal.classList.toggle('hide');
        }
   })

   const modalButton = document.querySelector('.modal-button');
   modalButton.addEventListener('click', function () {
        modal.classList.toggle('hide');
   });

})