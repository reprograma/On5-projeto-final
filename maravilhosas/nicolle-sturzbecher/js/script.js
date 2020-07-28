//reprograma menu MAS NÃO FUNFOU PQ? Não sei SOCORRO
/*(function() {
    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");
  
    btnResponsivo.addEventListener("click", function(e) {
      e.preventDefault();s
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
        menuResponsivo.className += "ativo";
      } else {
        menuResponsivo.className = "navegacao__itens";
      }
    });
  })();
  
  window.addEventListener("scroll", function() {
    if (pageYOffset >= 250) {
      document.querySelector(".navegacao").style.backgroundColor = "#674582";
      document.querySelector(".navegacao__itens").style.backgroundColor =
        "#674582";
    } else {
      document.querySelector(".navegacao").style.backgroundColor = "transparent";
      document.querySelector(".navegacao__itens").style.backgroundColor =
        "transparent";
    }
  });
*/


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
