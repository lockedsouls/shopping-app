document.querySelector("#password > img").onclick = (event) => {
    const password_field = event.target.parentElement.querySelector("input");
    
    if (password_field.type === "password"){
        password_field.type = "text";
        event.target.src = "./img/icons/eye-regular.svg";
    }else{
        password_field.type = "password";
        event.target.src = "./img/icons/eye-slash-regular.svg";
    }
};

document.querySelector("#authenticate > input").onclick = () => {
    //api call to backend
};

document.querySelector("#container > span > span").onclick = () => {
    console.log("redirect to register page");
};
