const apareceSobre = document.getElementById("aparece");
const resultados = document.getElementById('resultados');

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

apareceSobre.addEventListener('click', function() {
 
      resultados.innerHTML = `
      <img class="img-sobremim" src="./img/sobre_mim.jpg" />
      <p class="sobe__mim">Curiosa, amante de tecnologia e esportes, apaixonada por programação. Clique <a class="a__sobre" href="https://www.linkedin.com/in/louisejosephine/" target="_blank">aqui</a>
      para saber mais de mim,
      e <a class="a__sobre" href="https://github.com/LoPhine" target="_blank">aqui</a> para ver meu repositório.</p>`
    
      })


  