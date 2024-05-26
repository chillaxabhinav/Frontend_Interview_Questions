const boxConfig = [
    { color: 'red', width: '33.33%' },
    { color: 'green', width: '33.33%' },
    { color: 'blue', width: '33.33%' },
    { color: 'yellow', width: '50%' },
    { color: 'orange', width: '50%' },
    { color: 'purple', width: '70%' },
    { color: 'pink', width: '30%' }
]

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add('boxes');

    boxConfig.forEach(box => {
        const boxDiv = document.createElement('div');
        boxDiv.setAttribute('data-color', box.color);
        boxDiv.style.backgroundColor = box.color;
        boxDiv.style.width = box.width;
        boxDiv.classList.add('box');
        div.appendChild(boxDiv);
    });

    console.log(div);

    div.addEventListener('click', function (e) {
        const color = e.target.getAttribute('data-color');
        if (!color) return;
        alert(`You clicked on ${color} box`);
    });

    body.appendChild(div);
})