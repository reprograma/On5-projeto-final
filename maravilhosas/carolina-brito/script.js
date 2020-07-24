window.addEventListener("scroll", function(){
   
    if(pageYOffset >= 250) {
       document.querySelector('.navegacao').style.backgroundColor = '#674582';
       document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
    } else {
       document.querySelector('.navegacao').style.backgroundColor = 'transparent';
       document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
    }

})


