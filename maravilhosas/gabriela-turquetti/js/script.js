// MENU RESPONSIVO PARA MOBILE
(function() {
    var menuResponsivo = document.getElementById("menuResponsivo");
    var btnResponsivo = document.getElementById("btnResponsivo");
  
    btnResponsivo.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
        menuResponsivo.className += " ativo";
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

// TYPE WRITING EFFECT
document.addEventListener('mouseover', typeWriting)
let i = 0
let quote = `Pra mim, o perigo não é importante. Nos vulcões eu esqueço tudo. - Katia Krafft`
function typeWriting(){
    if (i<quote.length){
        document.getElementById('quote_txt').innerHTML += quote.charAt(i);
        i++;
        setTimeout(typeWriting,100)
    }
}
typeWriting()

//CLICK AUTORA
document.getElementById('btn_autora').addEventListener('click',function(){
  document.getElementById("autora").innerHTML = `Geofísica, professora de inglês e curiosa por natureza! <br> Sempre em busca de novos desafios!`
})