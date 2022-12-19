window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cat-form').addEventListener("submit", function(e) {
        e.preventDefault();
        addCat();
    })
});

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cat-form').addEventListener("reset", function(e) {
        e.preventDefault();
        clearCats();
    })
});

window.addEventListener('load', event => createTable())

function addCat() {
    let _name = document.getElementById("name-input").value;
    let _breed = document.getElementById("breed-input").value;
    let id = localStorage.length + 1;

    localStorage.setItem(id.toString(), JSON.stringify({catName: _name, catBreed: _breed}));
    createTable();
}

function clearCats() {
    localStorage.clear();
    createTable();
}

function createTable() {
    let place = document.getElementsByClassName("l-cat-form").item(0);

    let table;
    let thing;
    let row;

    if (place.children.length > 1)
        place.removeChild(place.children.item(1))

    table = document.createElement("table");

    row = document.createElement("tr");

    thing = document.createElement("th");
    thing.textContent = "Id";
    row.appendChild(thing)

    thing = document.createElement("th");
    thing.textContent = "Имя";
    row.appendChild(thing)

    thing = document.createElement("th");
    thing.textContent = "Порода";
    row.appendChild(thing)

    table.appendChild(row);

    let keys = Object.keys(localStorage);
    for(let key of keys) {
        let cat = JSON.parse(localStorage.getItem(key));
        console.log(cat);

        row = document.createElement("tr");

        thing = document.createElement("td");
        thing.textContent = key;
        row.appendChild(thing)

        thing = document.createElement("td");
        thing.textContent = cat.catName;
        row.appendChild(thing)

        thing = document.createElement("td");
        thing.textContent = cat.catBreed;
        row.appendChild(thing)

        table.appendChild(row);
    }

    place.appendChild(table);
}