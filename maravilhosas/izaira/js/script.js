
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
 const windowTop = window.pageYOffset + (window.innerHeight * 0.70)
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



    
