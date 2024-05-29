document.addEventListener("DOMContentLoaded", function () {
    const select = document.querySelector('#fruit');

    select.addEventListener('change', function (e) {
        console.log(e.target.value);
    })
})