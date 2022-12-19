window.addEventListener('load', event => colorButton())

function colorButton() {
    let file = document.location.href.split("/").at(-1);
    let navigation = document.getElementsByClassName("nav-item");
    for(let i = 0; i < navigation.length; ++i) {
        if (navigation.item(i).attributes.getNamedItem("href").value == file) {
            navigation.item(i).setAttribute("style", "color: azure");
        }
    }
}