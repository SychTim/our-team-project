const modal = document.querySelector(".modal-backDrop");
const BTNClose = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-text");
const body = document.querySelector("body");

export function modalOpen(data) {
    modal.classList.remove('is-closed');
    body.style.overflow = 'hidden';

    modalTitle.textContent = data.title ? data.title : data.status;
    modalText.textContent = data.message;
    
    modal.addEventListener("click", modalCloseBack);
    BTNClose.addEventListener("click", modalClose);
    window.addEventListener("keyup", modalCloseExp);
}

function modalCloseExp(evt) {
    if (!(evt.code === "Escape")) {
        return;
    }
    modalClose();
    window.removeEventListener("keyup", modalCloseExp);
}

function modalCloseBack(evt) {
    if (!evt.target.classList.contains("modal-backDrop")) {
        return;
    }
    modal.removeEventListener("click", modalCloseBack);
    modalClose();
}

function modalClose() {
    modal.classList.add('is-closed');
    BTNClose.removeEventListener("click", modalClose);
    body.style.overflow = "";
}