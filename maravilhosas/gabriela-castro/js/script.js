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

 const div = document.getElementById('main__maravilhosa')
 const button = document.getElementById('button__maravilhosa')

 button.addEventListener('click', function() {

     div.innerHTML =`
     <img src="img/chimamanda_3.jpg" class="img__maravilhosa">
     <p class="p__maravilhosa">
     Nascida na cidade de Enugu, ela é a quarta de seis filhos de uma família do grupo étnico africano Igbo. Foi criada 
     na cidade universitária de Nsukka, Universidade da Nigéria, local onde trabalhavam seus 
     pais. Seu pai, James Nwoye Adichie, era professor de estatística no local. Sua mãe, Graça Ifeoma, foi a primeira 
     administradora do sexo feminino na universidade.<br>
     Sua trajetória inclui diversos <a href="#books" class="links"><strong>livros</strong></a> escritos e discursos realizados no
     <a href="#ted" class="links"><strong>TED</strong></a>. Seus relatos perpassam sua experiência como uma africana feminista, e sua visão sobre construção
       de gênero e sexualidade.
     </p>
     `
     div.classList.toggle('visible')
 })