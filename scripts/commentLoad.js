window.addEventListener('load', event => getComment());

function getComment() {
    let id = Math.floor(Math.random( ) * 500);
    fetch('https://jsonplaceholder.typicode.com/comments/' + id.toString())
        .then(response => processing(response))
}

function processing(request) {
    if (request.ok) {
        let preloader = document.getElementsByClassName("l-preloader")[0];
        document.getElementsByClassName("l-content")[0].removeChild(preloader);

        let comment = document.getElementsByClassName("l-comment")[0];
        let head = document.createElement("p");
        head.innerText = "Комментарий";
        comment.appendChild(head);

        let author = document.createElement("p");
        let email = document.createElement("p");
        let body = document.createElement("p");
        request.json().then(json => {
            author.innerText = "Автор: " + json.name;
            email.innerText = "Email: " + json.email;
            body.innerText = json.body;

            comment.appendChild(author);
            comment.appendChild(email);
            comment.appendChild(body);
        })
    } else {
        let gif = document.getElementById("load-gif");
        gif.setAttribute("src", "gifs/wrong.gif");
        gif.setAttribute("style", "height: 240px; width: 245px")

        let content = document.getElementsByClassName("l-content")[0];
        let head = document.createElement("p");
        head.innerText = "Что-то пошло не так...";
        head.setAttribute("style", "visibility: visible");
        head.setAttribute("class", "fail-comment");
        content.appendChild(head);
    }
}