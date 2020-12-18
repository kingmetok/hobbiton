const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    let s = JSON.stringify(Object.fromEntries(formData));


    const xhr = new XMLHttpRequest();
    const url = "./api/auth/registration";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };

    xhr.send(s);

});

const login = document.getElementById("login");

login.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(login);

    let s = JSON.stringify(Object.fromEntries(formData));


    const xhr = new XMLHttpRequest();
    const url = "./api/auth/login";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };

    xhr.send(s);
});