const boutons = document.querySelectorAll(".color");
const text = document.querySelector("#text");

boutons.forEach(bouton => {
    bouton.addEventListener("click", handleClickChangeCouleur);
})

function handleClickChangeCouleur(event){
    text.style.color = event.target.classList[1];
}



// const text = document.querySelector("#text");

// const vert = document.querySelector("div .green");
// const rouge = document.querySelector("div .red");
// const bleu = document.querySelector("div .blue");

// vert.addEventListener("click", handleClickTexteVert);
// rouge.addEventListener("click", handleClickTexteRouge);
// bleu.addEventListener("click", handleClickTexteBleu);

// function handleClickTexteVert(){
//     text.style.color = ("green");
// }
// function handleClickTexteRouge(){
//     text.style.color =("red");
// }
// function handleClickTexteBleu(){
//     text.style.color = ("blue");
// }