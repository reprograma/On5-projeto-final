var div = document.querySelector('.principal__titulo');
var texto = 'Viola Davis';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 200);
}

escrever(texto, div);


function ocultarLegenda(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}

function alterarImgEmmy() {
    document.getElementById("foto").src="./img/viola-emmy.jpeg"
}

function alterarImgOscar() {
    document.getElementById('foto').src="./img/viola-oscar.jpg"
}

function alterarImgGoldenGlobe() {
    document.getElementById('foto').src="./img/viola-goldenglobe.jpg"
}

function alterarImgCCA() {
    document.getElementById('foto').src="./img/viola-critics-choice-awards.jpg"
}



// Menu Responsivo

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


// Modal Sobre a Autora

const modal = document.getElementById('autora_modal');
const modalBtn = document.getElementById('secao-autora__btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
