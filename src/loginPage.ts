(document.querySelector("#password > img") as HTMLImageElement).onclick = (event) => {
    const target = event.target as HTMLImageElement;
    const password_field = document.querySelector("#password > input") as HTMLInputElement;

    if (password_field.type === "text"){
        password_field.type = "password";
        target.src = "./img/icons/eye-slash-regular.svg";
    }else{
        password_field.type = "text";
        target.src = "./img/icons/eye-regular.svg";
    }
}