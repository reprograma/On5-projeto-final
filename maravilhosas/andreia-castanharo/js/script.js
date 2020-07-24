const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    
});


//var btnVideo = document.getElementById("btnVideo");
//btnVideo.onclick = function(){
  //  btnVideo.onplay();

//})
/*sinalizacao.ready(function){
    sinalizacao.hide();
  //btnVideo . click(function){
(this).toggleClasse("aactive")
return false;

    });
}))*/


function myFunction() {
    var x = document.querySelector(".sinaliza");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  };

  const btnVideo = document.querySelector("#btnVideo");

btnVideo.addEventListener("click", function() {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    
});