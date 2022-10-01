const inputName = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

// Validar se o nome foi Preenchido com mais de 2 caracteres
const validateInput = ({target}) => {
    if (target.value.length >= 3) {
        button.removeAttribute("disabled");
        return;
    } 

    button.setAttribute("disabled", "");
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("player", inputName.value);
    window.location = "/pages/game.html";
}

// evento para validar nome do player
inputName.addEventListener("input", validateInput);

// evento para quando o formulario for enviado
form.addEventListener("submit", handleSubmit);
