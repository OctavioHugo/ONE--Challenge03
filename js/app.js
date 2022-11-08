import { validation } from "./validation.js";

const inputs = document.querySelectorAll(".formcontato__validation");

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validation(input.target);
    });
}); 
