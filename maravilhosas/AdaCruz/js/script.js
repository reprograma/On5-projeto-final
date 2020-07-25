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
  
let count = 0;
let targetElement = ".secao-diva__historia";
let targetVisibleElementPrev = ".secao-diva__historia";
document.querySelector(".secao-diva__historia").querySelectorAll(":scope > div").forEach(elem => {
    elem.id = `media-${count++}`;
    elem.className = "elusive"
})

function isVisible(elem) {
    return topIsVisible(elem) || bottomIsVisible(elem);
}

function topIsVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    return topVisible;
}

function bottomIsVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return bottomVisible;
}

window.addEventListener("scroll",checkOneAndShowNext);

function checkOneAndShowNext() {
    for (let textDiv of document.querySelector(".secao-diva__historia").querySelectorAll(":scope > div")) {
        if (isVisible(document.querySelector(targetElement)) || bottomIsVisible(document.querySelector(targetVisibleElementPrev)) ) {            
            if (textDiv.className == "elusive") {   
                targetElement = `#${textDiv.id}`;
                targetVisibleElementPrev = targetElement;
                textDiv.className = "media puff-in-center";
                break;
            }
        }
    }
}
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
  