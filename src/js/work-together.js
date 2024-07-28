import axios from "axios";
import { modalOpen } from "./modal";

const form = document.querySelector('.wt-form');
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
        modalOpen(data);
    } catch (error) {
        modalOpen(error);
    }
}