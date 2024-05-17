document.addEventListener('DOMContentLoaded', event => checkTime());
window.addEventListener('load', event => showTime());
const entries = performance.getEntriesByType("navigation");

let startTime = 0;
function checkTime() {
    startTime = Date.now();
}

function showTime() {
    let place = document.getElementsByClassName("l-footer");
    let elem = document.createElement('p');

    let domTime = 0;
    entries.forEach((entry) => {
        domTime = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    });
    let time = ((Date.now() - startTime + domTime) / 1000).toFixed(3);
    elem.textContent = "Loading time: " + time.toString() + ' seconds';

    place.item(0).appendChild(elem);
}