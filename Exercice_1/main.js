const img1 = document.querySelector("#image1");

img1.addEventListener("mouseover", handleMouseOverBorderRed);
// img1.addEventListener("mouseover", handleMouseOverBorderRed);

function handleMouseOverBorderRed(event){
    event.target.classList.toggle("border");
}