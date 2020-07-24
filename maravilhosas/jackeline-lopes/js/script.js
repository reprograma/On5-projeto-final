//botão autora
let botaoAutora = document.querySelector('.arrow')


botaoAutora.addEventListener('click', function() {
    botaoAutora.classList.toggle('arrow-close')
    let infoAutora = document.querySelector('.secao-autora__about')
    infoAutora.classList.toggle('opened');
});
