const btnFecha = document.querySelector('.fa-times-circle');
const btnNext = document.querySelector('.fa-forward');
const divDetalhes = document.querySelector('.detalhes');
const btn1910 = document.querySelector('.fa-star');
const pHistoria = document.querySelector('.message');
const btn1929 = document.querySelector('.item11');
const btn1939 = document.querySelector('.item3');
const btn1941 = document.querySelector('.item13');
const btn1943 = document.querySelector('.item5');
const btn1949 = document.querySelector('.item15');
const btn1958 = document.querySelector('.item7');
const btn1961 = document.querySelector('.item17');
const btn1971 = document.querySelector('.item9');
const btn2008 = document.querySelector('.item2F');


/*Nav*/
(function(){

  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener('click', function(e){
      e.preventDefault();
      document.body.scrollTop += 0;
      if (menuResponsivo.className === "navegacao__itens") {
          menuResponsivo.className += " ativo";
      } else {
          menuResponsivo.className = "navegacao__itens";
      }
  });

})();


window.addEventListener("scroll", function(){

  if(pageYOffset >= 250) {
     document.querySelector('.navegacao').style.backgroundColor = '#674582';
     document.querySelector('.navegacao__itens').style.backgroundColor = '#674582';
  } else {
     document.querySelector('.navegacao').style.backgroundColor = 'transparent';
     document.querySelector('.navegacao__itens').style.backgroundColor = 'transparent';
  }

})

//Botões da linha do tempo
btnFecha.addEventListener('mouseover', function(){
  divDetalhes.style.display = 'none';
})

btn1910.addEventListener('mouseover', function(){
  pHistoria.textContent = 'Dorothy Vaughan filha de Leonard e Annie Johnson nasceu em 10 de Setembro de 1.910 no Kansas City, Missouri. '
  + 'A família Johnson logo se mudou para Morgantown, West Virginia, onde permaneceram durante toda a infância'
  + ' de Dorothy. Ela rapidamente provou ser uma estudante talentosa, graduando-se cedo da escola aos 15 anos'
  + ' de idade e foi a oradora oficial de sua turma.';
  divDetalhes.style.display = 'block';
})

btn1929.addEventListener('mouseover', function(){
  pHistoria.textContent = 'Em 1929, Dorothy Vaughan (até então Dorothy Johnson, nome de solteira) era bacharel em ciências pela Universidade de Wilberforce (Ohio).'
  + ' Dorothy se casou em 1932 com Howard Vaughan com quem teve seis filhos. O casamento durou até o fim de sua vida.'
  + ' Após se formar, devido à crise econômica americana (a Grande Depressão, de 1929), ela desistiu de seguir seus estudos em um mestrado e decidiu'
  + ' trabalhar em período integral para ajudar no sustento da sua família.'
  + ' Iniciou sua carreira como professora de matemática para o ensino médio, na cidade de Farmville, Virginia.';
  divDetalhes.style.display = 'block';
})

btn1939.addEventListener('mouseover', function(){
  pHistoria.textContent = 'Teve início a Segunda Guerra Mundial, um conflito militar global que durou de 1939'
  + ' a 1945, envolvendo a maioria das nações do mundo, incluindo todas as grandes potências, organizadas '
  + 'em duas alianças militares opostas: os Aliados e o Eixo.';
  divDetalhes.style.display = 'block';
})

btn1941.addEventListener('mouseover', function(){
  pHistoria.textContent = 'Em 25 de junho de 1.941 a Executive Order 8802 foi assinada pelo Presidente dos Estados Unidos Franklin'
  + ' D. Roosevelt a  para proibir a discriminação racial na indústria de defesa de seu'
  + 'país. Foi a primeira ação federal (embora não seja uma lei) a promover igualdade de oportunidades e a'
  +' proibir a discriminação no emprego, nos Estados Unidos.';
  divDetalhes.style.display = 'block';
})

btn1943.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Em 1943, durante a Segunda Guerra Mundial, ela conseguiu um emprego no Comitê Consultivo Nacional para a'
  + 'Aeronáutica (NACA, o predecessor NASA) como um computador (pessoas com altas habilidades em Matemática'
  + 'contratadas para fazer cálculos em alta velocidade). NACA e o resto das agências federais tinham '
  + 'tecnicamente desagregados em 1941 por ordem executiva do presidente Franklin D. Roosevelt.'
  + 'Vaughan foi atribuída ao grupo Computing Área West at Langley Research Center, em Hampton, Virginia.'
  + ' Apesar das mulheres pretas serem recrutadas ativamente, elas ainda estavam segregados em grupos separados'
  +' de seus colegas brancos.'
  divDetalhes.style.display = 'block';
})

btn1949.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Em 1949, Dorothy Vaughan foi designada para supervisionar os computadores da área de West, mas não em um'
  +' papel oficial de supervisão. Em vez disso, a ela foi dado o papel como chefe interina do grupo (depois de'
  +' seu supervisor anterior, uma mulher branca, morreu). Isto significou que o trabalho não veio com o título'
  +' e valor esperado. Foram alguns anos lutando por isto antes que ela finalmente conseguisse'
  +' o papel de supervisora em uma capacidade oficial recebendo os benefícios que vinham com o cargo.'
  +' Dorothy não defendia apenas a si mesma, mas também trabalhou duro para defender mais oportunidades para'
  +' as mulheres. Sua intenção não era apenas para ajudar seus colegas Oeste Computing, mas as mulheres em toda'
  +' a organização, incluindo mulheres brancas. Eventualmente, sua experiência veio a ser altamente valorizada'
  +' pelos engenheiros da NASA, que se baseou fortemente em suas recomendações para combinar projetos com os'
  +' computadores cujas habilidades alinhadas eram melhores.'
  divDetalhes.style.display = 'block';
})

btn1958.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Em 1958, 15 anos depois do início de suas atividades na NACA, a NACA tornou-se NASA.'
  + ' As instalações segregadas foram completamente e, finalmente abolidas.'
  divDetalhes.style.display = 'block';
})

btn1961.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Dorothy Vaughan trabalhou na divisão de técnicas numéricas e, em 1961, mudou seu foco para a nova fronteira'
  +' da computação eletrônica. Ela descobriu, mais cedo do que muitos outros, que os computadores eletrônicos'
  +' seriam o futuro, por isso ela trabalhou para que ela e as mulheres em seu grupo estivessem preparadas.'
  +' Durante seu tempo na NASA, Vaughan também contribuiu diretamente para projetos sobre o programa espacial'
  +' com seu trabalho sobre o Programa de Veículo Escoteiro Launch, um determinado tipo de foguete projetado'
  +' para lançar pequenos satélites em órbita ao redor da Terra.'
  +' Dorothy aprendeu sozinha a Fortran linguagem de programação que foi usada para a computação cedo, e de lá,'
  +' ela ensinou a muitos de seus colegas para que estivessem preparados para a transição inevitável.'
  +' Eventualmente, ela e vários de seus colegas do Oeste Área de Computação juntaram-se a recém-formada'
  +' Divisão de Análise e Computação. Embora tentasse receber outra posição de gestão, nunca a foi concedida.'
  divDetalhes.style.display = 'block';
})

btn1971.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Dorothy Vaughan trabalhou em Langley por 28 anos. Em 1971, ela finalmente se aposentou, com 71 anos de idade.'
  +' Ela continuou a ser ativa em sua comunidade e em sua igreja, mas viveu uma vida bastante tranquila.'
  divDetalhes.style.display = 'block';
})

btn2008.addEventListener('mouseover', function(){
  pHistoria.textContent =
  'Dorothy morreu em 10 de novembro de 2008 com 98 anos de idade, menos de uma semana após a eleição do'
  +' primeiro presidente negro dos Estados Unidos, Barack Obama.'
  divDetalhes.style.display = 'block';
})

/*Autora*/
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

