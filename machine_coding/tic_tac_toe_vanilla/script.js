document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('.grid');
    const message = document.querySelector('.winning-message');

    // Can be "X" or "O"
    let currentPlayer = "X";

    const arr = Array(9).fill(null);

    grid.addEventListener('click', function (e) {
        const id = e.target.getAttribute('id');
        if (!id) return;

        let intId = +id;
        if (arr[intId] !== null) return;

        arr[intId] = currentPlayer;
        const box = document.getElementById(String(intId));
        box.innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });

    function checkWinner () {
        if (
            (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
            (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
            (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
            (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
            (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
            (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
            (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
            (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
        ) {
            grid.style = 'display:none;'
            message.innerText = currentPlayer + ' wins!!';
        }

        if (!arr.some(ele => ele === null)) {
            grid.style = 'display:none;'
            message.innerText = 'Draw!!';
        }
    }
})