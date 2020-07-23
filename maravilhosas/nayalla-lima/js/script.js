(function(){

   var menuResponsivo = document.getElementById("menuResponsivo");
   var btnResponsivo = document.getElementById("btnResponsivo");
   
   btnResponsivo.addEventListener('click', function(e){
       e.preventDefault();
       document.body.scrollTop += 0;
       if (menuResponsivo.className === "navegacao__itens") {
           menuResponsivo.className += " ativo";
       } else {
           menuResponsivo.className = "navegacao__itens";
       }
   });

})();

window.addEventListener("scroll", function(){
  
   if(pageYOffset >= 250) {
      document.querySelector('.navegacao').style.backgroundColor = '#674582';
      document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
   } else {
      document.querySelector('.navegacao').style.backgroundColor = 'transparent';
      document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
   }

})

try {
   const buttonAutora = document.querySelector('.arrow')
   buttonAutora.addEventListener('click', function(e){
       e.preventDefault()
       buttonAutora.classList.toggle('arrow-close')
       const autoraInfos = document.querySelector('.secao-autora__about')
       autoraInfos.classList.toggle('opened');
   })
} catch {
   if(!buttonAutora) {
       
   } 
}
window.addEventListener("scroll", function(){
   
    if(pageYOffset >= 250) {
       document.querySelector('.navegacao').style.backgroundColor = '#674582';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
    } else {
       document.querySelector('.navegacao').style.backgroundColor = 'transparent';
       document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
    }

})

let slideIndex = 1;

// é chamada assim que a pagina é carregada, para mostrar o slider
showSlides(slideIndex);

// funcao que é chamada quando clicamos o botao de passar foto
// ela chama novamente a funcao de mostrar slides passando um numero que
// atualiza o slideIndex
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// faz com que quando houver click nas bolinhas ela mudem o slideIndex
// e mostre a foto referente a bolinha
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // array de divs com a class mySlides, ou seja, todas as divs de imagens
    const slides = document.querySelectorAll('.mySlides');

    //array de spans que tem a class dot, ou seja, as bolinhas que
    // ficam embaixo na foto.
    const dots = document.querySelectorAll('.dot');

    //controla o slideIndex para nao avançar do length da array
    if (n > slides.length) {
         slideIndex = 1
    }

     //controla o slideIndex para nao ficar um valor negativo
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');
}

