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





const button = document.getElementById('button')

button.addEventListener('click', function() {
    button.remove()

    const facts = ['- Rosalind E. Franklin nasceu em Londres, no dia 25/7/1920 em uma proeminente família judaica na cidade que valorizava a educação e o serviço público.',
     ' - Sua família participou ativamente na proteção de judeus perseguidos pela Alemanha nazista de Hitler.', ' - Ela é descrita como uma mulher apaixonada pela vida, que viajava habitualmente, além de cultivar o gosto por trilhas ao ar livre e por vivazes discussões sobre não apenas ciência, mas também política.', ' - Franklin nunca veio a casar-se, dedicando grande parte de seu tempo ao trabalho e aos seus amigos próximos.', ' - Seu trabalho revolucionou a medicina, biologia e agricultura.', ' - Ela veio a falecer vítima de câncer de ovário em 1958, com apenas 37 anos de idade.', ' - A cientista foi descrita de maneira pejorativa por Wilkins, Crick e James Watson.', ' - James Watson veio a perder seus títulos honorários por usar seu conhecimento científico para embasar teorias genéticas racistas.']

    const result = document.getElementById('result')
    const resultList = document.getElementById('resultList')

    // result.innerHTML = `O array dogs tem ${facts.length} itens:`
    result.innerHTML = `<strong>${facts.length} fatos sobre a vida de Rosalind:`

    resultList.innerHTML = ''
    for (let i = 0; i < facts.length; i++) {
        resultList.innerHTML += `<li>${facts[i]}</li>`
    }
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function addRow () {
  document.querySelector('#content').insertAdjacentHTML(
    'afterbegin',
    `<div>
    <p> A data da minha apresentação do Projeto Final na { reprograma } coincidiu perfeitamente com o dia do Centenário de Rosalind Franklin <strong>(25/7/1920 - 25/07/2020)</strong>. Que a tenhamos como exemplo de força, dedicação, comprometimento e pioneirismo.</p>
    <p></p>
    <figure>
      <img class="time" src="./img/franklinTIME.jpeg" alt="Franklin on Times Magazine">
    </figure>
    </div>`
  )
}

function removeRow (input) {
  input.parentNode.remove()
}

