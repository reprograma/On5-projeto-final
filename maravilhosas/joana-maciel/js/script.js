

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach( (letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75* i);
    });
}

const titulo = document.querySelector("#zuzuangel");
typeWriter(titulo);

typeWriter(document.querySelector(".maravilhosa__titulo"))

var quote = document.getElementById("quote");
window.addEventListener("scroll", zuzuQuote);
function zuzuQuote() {

  if (pageYOffset >= 950) {
    quote.classList.add("quote-show")
    quote.classList.remove("quote-hidden")
  }
  else {
    quote.classList.remove("quote-show")
    quote.classList.add("quote-hidden")
  }
};



