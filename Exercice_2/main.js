const Afficher = document.querySelector("#Afficher");
const Masquer = document.querySelector("#Masquer");

const text = document.querySelector("#text");


Afficher.addEventListener("click", handleClickAfficher);
function handleClickAfficher(){
    text.classList.add("afficher");
    text.classList.remove("masquer");
}

Masquer.addEventListener("click", handleClickMasquer);

function handleClickMasquer(){
    text.classList.add("masquer");
    text.classList.remove("afficher");
}