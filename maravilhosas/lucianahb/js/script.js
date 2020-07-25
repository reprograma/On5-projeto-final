window.onload = function () {
  let menuResponsivo = document.getElementById('menuResponsivo');
  let btnResponsivo = document.getElementById('btnResponsivo');

  btnResponsivo.addEventListener('click', function(e) {
    e.preventDefault();

    // document.body.scrollTop += 0;
    
    if (menuResponsivo.classList.contains('ativo')) {
      menuResponsivo.classList.remove('ativo');
    } else {
      menuResponsivo.classList.add('ativo');
    }
  });
  
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navegacao');
    if (pageYOffset >= 150) {
      nav.classList.add('navegacao--scroll')
    } else {
      nav.classList.remove('navegacao--scroll')
    }
  });
}

// fotos
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 1200);
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// autora mostrar detalhes: 
let btnShow = document.querySelector(".show");
let content = document.querySelector(".sobreautora");

btnShow.addEventListener("click", function(){
  content.classList.toggle("sobreautora");
})

