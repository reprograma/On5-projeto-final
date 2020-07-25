
//variavel que vai controlar o status do index na array de imagens
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

    if (n > slides.length) {
         slideIndex = 1
    }

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
