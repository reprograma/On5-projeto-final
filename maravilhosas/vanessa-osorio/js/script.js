
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

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

const div = document.getElementById('main')
const button = document.getElementById('button')

button.addEventListener('click', function () {
  div.innerHTML = `
    <div class="video">
      <div>
      <p class="titulo-doc-trailer">  Trailer do documentário<br><i> The Invisible Computers: <br> The Untold Story of
          the ENIAC Programmers.</i></p>
        <p class="texto-doc"><i>The Invisible Computers</i> é uma história inspiradora que mudará estereótipos e abrirá
          portas. Isso ajudará os alunos
          a ver que as carreiras de tecnologia estão ao seu alcance e os profissionais de computação sabem que os
          maiores pioneiros em
          computação de seu campo incluíam mulheres e homens!</p>
      </div>
      <video class="video-box" controls
        src="./mp4/As garotas do ENIAC. Mulheres que revolucionaram a tecnologia..mp4">Trailer</video>
      </video>
    <div>

  `
  div.classList.toggle('visible')
})

try{
const buttonAutora = document.querySelector('.arrow')
buttonAutora.addEventListener('click', function(e){
    e.preventDefault()
    buttonAutora.classList.toggle('arrow-close')
    const autoraInfos = document.querySelector('.secao-autora_about')
    autoraInfos.classList.toggle('opened');
})
} catch {
if(!buttonAutora) {

}
}
