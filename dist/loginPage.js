"use strict";
const password_field = document.querySelector("#password > input");
const toggle_password_visiblity = document.querySelector("#password > img");
if (toggle_password_visiblity) {
    toggle_password_visiblity.onclick = (event) => {
        if (password_field.type === "text") {
            password_field.type = "password";
            toggle_password_visiblity.src = "./img/icons/eye-slash-regular.svg";
        }
        else {
            password_field.type = "text";
            toggle_password_visiblity.src = "./img/icons/eye-regular.svg";
        }
    };
}
