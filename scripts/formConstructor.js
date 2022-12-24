window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cat-form').addEventListener("submit", function(e) {
        e.preventDefault();
        addCat();
    })
    document.getElementById('cat-form').addEventListener("reset", function(e) {
        e.preventDefault();
        clearForm();
    })
});

window.addEventListener('load', event => createTable())

function addCat() {
    let cats = localStorage.getItem("cats");
    if (cats == null) {
        cats = [{id: 0, _name: document.getElementById("name-input").value, _breed:document.getElementById("breed-input").value}];
        localStorage.setItem("cats", JSON.stringify(cats));
    } else {
        cats = JSON.parse(cats);
        cats.push({id: cats[cats.length - 1].id + 1, _name: document.getElementById("name-input").value, _breed:document.getElementById("breed-input").value});
        localStorage.setItem("cats", JSON.stringify(cats));
    }

    createTable();
}

function clearCats() {
    localStorage.removeItem("cats");
    createTable();
}

function clearForm() {
    document.getElementById("name-input").value = null;
    document.getElementById("breed-input").value = null;
}

function removeCat() {
    let cats = localStorage.getItem("cats");
    if (cats != null) {
        cats = JSON.parse(cats);
        let ind = -1;
        let _id = document.getElementById("id-input").value;
        for (let i = 0; i < cats.length; ++i)
            if (cats[i].id == _id) {
                ind = i;
                break;
            }

        if (ind != -1) {
            cats.splice(ind, 1);
            localStorage.setItem("cats", JSON.stringify(cats));
            createTable();
        }
    }
}

function createTable() {
    let place = document.getElementsByClassName("l-cat-form").item(0);

    let table;
    let thing;
    let row;

    if (place.children.length > 1)
        place.removeChild(place.children.item(1))

    table = document.createElement("table");
    let head = document.createElement("thead");

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

    head.appendChild(row);
    table.appendChild(head);

    let body = document.createElement("tbody");

    let cats = JSON.parse(localStorage.getItem("cats"));
    if (cats != null)
        for(let cat of cats) {
            row = document.createElement("tr");

            thing = document.createElement("td");
            thing.textContent = cat.id;
            row.appendChild(thing)

            thing = document.createElement("td");
            thing.textContent = cat._name;
            row.appendChild(thing)

            thing = document.createElement("td");
            thing.textContent = cat._breed;
            row.appendChild(thing)

            body.appendChild(row);
        }

    table.appendChild(body);
    place.appendChild(table);
}