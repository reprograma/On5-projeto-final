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


//Surprise Element
const div = document.getElementById('surprise')
const button = document.getElementById('button')

button.addEventListener('click', function() {
    div.innerHTML =`

    <div class="secao-autora">
        <img src="./img/foto-christiane.jpg" alt="Foto Autora da Página">
        <h4>Christiane Gomes</h4><br>
      <p>Fez parte da turma online de Front-End da Reprograma.</p>
    </div>

    `
    div.classList.toggle('visible')
})

