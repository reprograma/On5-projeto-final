//SELECTORS
const btnSetaUm = document.querySelector(".seta-um");
const btnSetaDois = documen.querySelector(".seta-dois");

//EVENT LISTENERS
btnSetaUm.addEventListener("click", showMsg);
btnSetaDois.addEventListener("click", showAutor);

//FUNCTIONS
function showMsg(event){
    const textoJ = document.getElementById("show-mensage");
    const seta =document.getElementById("umaSeta");
        if (textoJ.style.display == "none") {
            textoJ.style.display = "block";
            seta.classList.add("up");
            
        }else {
         textoJ.style.display = "none";
         seta.classList.remove("up");
        }
}

function showAutor(event){
    const eu = document.getElementById("show-autor");
    const seta =document.getElementById("umaSeta");
        if (eu.style.display == "none") {
            eu.style.display = "block";
            seta.classList.add("up");
        }else {
         eu.style.display = "none";
         seta.classList.remove("up");
        }
}
