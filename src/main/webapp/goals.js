const byId = document.getElementById("goal");


byId.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(byId);

    let s = JSON.stringify(Object.fromEntries(formData));

    let data = document.querySelector("#goal > .value");

    const xhr = new XMLHttpRequest();
    const url = "./api/account/goals/" + data.value;

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };

    xhr.send(s);
});

const userID = document.getElementById("user");

userID.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(userID);

    let s = JSON.stringify(Object.fromEntries(formData));

    let data = document.querySelector("#user > .value");

    const xhr = new XMLHttpRequest();
    const url = "./api/users/" + data.value;

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };

    xhr.send(s);
});