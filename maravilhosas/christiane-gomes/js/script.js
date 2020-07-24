const div = document.getElementById('element-surprise')
const button = document.getElementById('button')

button.addEventListener('click', function() {
    div.innerHTML =`
    <div class="secao-autora__container">
      <a><img class="secao-autora__foto" src="./img/foto-christiane.jpg" class="img"></a>
      <h6 class="nome-autora">Christiane Gomes</h6>
    </div>
    <div class="secao-autora__about">
      <p>Fez parte da turma online de Front-End da Reprograma.</p>
    </div>

    `
    div.classList.toggle('visible')
})
