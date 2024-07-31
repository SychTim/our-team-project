import axios from "axios";
import { modalOpen } from "./modal";

const form = document.querySelector('.wt-form');
const validMessage = document.querySelector(".wt-supp-text");
axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";

export function formStart() {
    form.addEventListener('submit', formSabmit);
}

async function formSabmit(evt) {
    evt.preventDefault();

    const formData = {
        email: form.email.value,
        comment: form.comment.value.trim()
    }

    if (formData.email === "" || formData.comment === "") {
        modalOpen({title: "Error", message: "Fill in all the fields"})
        return;
    }

    try {
        const data = (await axios.post("/requests", formData)).data;
        form.reset();
        form.email.classList.remove('val');
        validMessage.classList.remove('val');
        modalOpen(data);
    } catch (error) {
        modalOpen(error);
    }
}

form.email.addEventListener('input', inputValidator);
function inputValidator(evt) {
    if (form.email.value === "") {
        form.email.classList.remove('inVal');
        form.email.classList.remove('val');
        validMessage.classList.remove('val');
        validMessage.classList.remove('inVal');
        return;
    } if (form.email.validity.valid) {
        form.email.classList.remove('inVal');
        form.email.classList.add('val');
        validMessage.textContent = "Succes!";
        validMessage.classList.add('val');
        validMessage.classList.remove('inVal');
    } else {
        form.email.classList.add('inVal');
        form.email.classList.remove('val');
        validMessage.textContent = "Invalid email, try again";
        validMessage.classList.remove('val');
        validMessage.classList.add('inVal');
    }
    
}