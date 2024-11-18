const mdp = document.querySelector("#password");
const confirmer = document.querySelector("#confirmPassword");
const bouton = document.querySelector("button");


bouton.addEventListener("click", handleClickMauvaisMdp);

function handleClickMauvaisMdp(){
    if(mdp.value === confirmer.value){
        mdp.style.border = "3px green solid"
        confirmer.style.border = "3px green solid"
    } else {
         mdp.style.border = "3px red solid"
        confirmer.style.border = "3px red solid"
    }
}
