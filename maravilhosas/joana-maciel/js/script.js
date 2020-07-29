//efeito citação

var quote = document.getElementById("quote");
document.addEventListener("scroll", zuzuQuote);
function zuzuQuote() {

  if (pageYOffset >= 2400) {
    quote.classList.add("quote-show")
    quote.classList.remove("quote-hidden")
  } else {
    quote.classList.remove("quote-show")
    quote.classList.add("quote-hidden")
  }
};


//efeito maquina de escrever - título e subtítulo
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach( (letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75* i);
  });
}

const titulo = document.querySelector("#zuzuangel");
typeWriter(titulo);

typeWriter(document.querySelector(".maravilhosa__titulo"));


//nav responsiva
(function () {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
          menuResponsivo.className += " ativo";
      } else {
          menuResponsivo.className = "navegacao__itens";
      }
  });
})();

window.addEventListener("scroll", function () {
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

//efeito letra Angelica

try {
  const buttonLetra = document.querySelector('.arrow')
  buttonLetra.addEventListener('click', function(e){
      e.preventDefault()
      buttonLetra.classList.toggle('arrow-close')
      const letraAngelica = document.querySelector('.letraAngelica')
      letraAngelica.classList.toggle('opened');
  })
} catch {
  if(!buttonLetra) {

  } 
} 


