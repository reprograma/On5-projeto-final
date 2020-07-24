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



const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};  


const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate'

function animeScroll(){
 console.log('scrolando')
 const windowTop = window.pageYOffset + (window.innerHeight * 0.80)
 target.forEach(function(e){
     if((windowTop) > e.offsetTop){
         e.classList.add(animateClass)
     } else {
        e.classList.remove(animateClass)
     }
 })
}

const handleScroll = debounce(animeScroll, 100);

if(target.length) {
  window.addEventListener('scroll', handleScroll);
}



    
