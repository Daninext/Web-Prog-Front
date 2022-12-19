document.addEventListener('DOMContentLoaded', event => checkTime());
window.addEventListener('load', event => showTime())

let startTime = 0;
function checkTime() {
    startTime = Date.now();
}

function showTime() {
    let place = document.getElementsByClassName("l-footer");
    let elem = document.createElement('p');

    let time = (Date.now() - startTime) / 1000;
    console.log(time.toString() + ' seconds');
    elem.textContent = "Loading time: " + time.toString() + ' seconds';

    place.item(0).appendChild(elem);
}