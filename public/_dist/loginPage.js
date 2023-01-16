"use strict";
document.querySelector("#password > img").onclick = (event) => {
    const target = event.target;
    const password_field = document.querySelector("#password > input");
    if (password_field.type === "text") {
        password_field.type = "password";
        target.src = "./img/eye-slash-regular.svg";
    }
    else {
        password_field.type = "text";
        target.src = "./img/eye-regular.svg";
    }
};
