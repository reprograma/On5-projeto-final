//FUNÇÃO DO MENU RESPONSIVO, QUE ABRE O 'HAMBÚGUER' COM OS LINKS

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

//FUNÇÃO DO MENU, QUE, AO ROLAR DA PÁGINA, PERDE OU RETORNA A OPACIDADE

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

// ADICIONANDO FUNÇÕES AO SLIDER DE FOTOS

  //Váriavel que vai controlar o status do index na array de imagens
  let slideIndex = 1;

  //É chamada assim que a página é carregada, para mostrar o slider
  showSlides(slideIndex);

  //Função que é chamada quando clicamos o botão de passar as fotos. Ela chama novamente a função de mostrar slides passando um número que atualiza o slideIndex
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  //Faz com que quando houver click nas bolinhas elas mudem o slideIndex e mostrem a foto referente à bolinha
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      //Array de divs com a class mySlides, ou seja, todas as divs de imagens
      const slides = document.querySelectorAll('.mySlides');

      //Array de spans que tem a class dot, ou seja, as bolinhas que ficam embaixo na foto
      const dots = document.querySelectorAll('.dot');

      //Controla o slideIndex para não avançar do length da array
      if (n > slides.length) {
          slideIndex = 1
      }

      //Controla o slideIndex para não ficar um valor negativo
      if (n < 1) {
          slideIndex = slides.length
      }

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }

      for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove('active');
      }

      slides[slideIndex-1].style.display = 'block';
      dots[slideIndex-1].classList.add('active');
  }


// ARRAY COM OS TEXTOS DA BIOFRAFIA

  const biografiaTitulos = [

    {
      texto: "Edith Stein, a caçula de uma numerosa família hebraica, nasceu em 12 de outubro de 1891 em Breslau, Alemanha. <br> <br>Antes de completar dois anos ficou órfã de pai. A pequena Edith era de temperamento forte, vivaz e independente. <br> <br> Ademais, demonstrava uma inteligência muito precoce, que lhe proporcionou o primeiro lugar da classe durante toda a sua vida escolar. <br> <br> Crescendo numa família praticante da religião judaica, ela acreditava em Deus e a Ele dirigia suas preces."

    },

    {
      texto: "Porém, ao atingir a adolescência, perdeu a fé na existência de Deus, parou de rezar e abandonou os estudos. Ela própria relatou mais tarde: “Com plena consciência e por livre decisão, deixei de rezar. Meus anseios de conhecer a Verdade eram minha única oração. <br> <br>Aos 14 anos, decidiu retomar os estudos colegiais, para ingressar na universidade. E em 1911 matriculou-se, não em um, mas em três cursos: Filosofia, Língua Alemã e História. <br> <br> Naquela época era pouco comum uma mulher cursar a universidade, menos ainda ver uma jovem de 20 anos seguir três cursos ao mesmo tempo! Todas as preferências de Edith eram para a Filosofia. Assim, mudou-se em 1913 para Göttingen a fim de assistir às aulas de Edmund Husserl, considerado o mais importante filósofo alemão da época. <br> <br> Essa jovem estudante parecia haver sucumbido de todo na crise da fé, pois até já se declarava atéia. Mas, por paradoxal que pareça, ela continuava como uma incansável peregrina à procura da Verdade."
    },
    
    {
      texto: "E a Divina Providência, por seu lado, a guiava por caminhos misteriosos cada vez para mais perto de Deus, a Verdade Absoluta. Afinal, Deus, o que é? Essa Verdade última, pela qual pautei minha vida, em que consiste? Qual o sentido do sofrimento? Como se explica o mal? <br> <br>Questões como essas povoavam a mente inquieta de Edith. Anos depois ela afirmou: “O estudo da filosofia é um contínuo caminhar à beira do abismo”. E acrescentou: “Eu vivia no ingênuo auto-engano de que tudo em mim estava correto, como é freqüente em pessoas sem fé, que vivem num tenso idealismo ético”. <br> <br> Encontrava-se ela nessa situação interior quando, por volta de 1914, fez uma análise do Pai-Nosso, não do ponto de vista religioso, mas estudando a etimologia alemã. Ficou muito impressionada com essa oração, e a repassou várias vezes. Nessa mesma época, Edith travou conhecimento com Adolf Reinach, judeu e discípulo de Husserl, como ela. <br> <br>Também ele buscava a Verdade com fervor e probidade. Logo se formou entre ambos uma sincera amizade, da qual participava também sua esposa Anna. Ora, o casal Reinach estava, por assim dizer, nas vésperas de sua conversão ao Catolicismo, e isso teria em breve uma especial repercussão sobre Edith."
    },

    {
      texto: "Nesse ano de 1914, as atividades intelectuais na Alemanha sofreram um forte abalo com o início da Primeira Guerra Mundial. Edith voltou para Breslau e alistou-se como enfermeira voluntária. <br> <br>“Agora não tenho vida própria – todas as minhas forças pertencem a esse grande acontecimento. Quando a guerra terminar, e se eu ainda continuar viva, poderei pensar em meus assuntos privados.” Fez um curso de Enfermagem e foi destacada para ser vir num hospital militar, onde, além de prestar assistência na sala de cirurgias, ficou encarregada dos doentes de tifo. <br> <br>Por sua disponibilidade em serviço e sua dedicação aos enfermos, especialmente os moribundos, recebeu a medalha de honra da Cruz Vermelha. Esse hospital foi fechado e ela mudou-se para Friburgo, onde fez o curso de doutorado em Filosofia, obtendo aprovação summa cum laude (máxima com louvor)."
    },

    {
      texto: "Pouco tempo depois, a Providência lhe pôs diante dos olhos dois episódios que, como flashes fotográficos, iluminaram a alma dessa jovem doutora a caminho da conversão. Certo dia, visitando a Catedral de Friburgo com objetivo meramente turístico, ela v iu entrar uma mulher com sua cesta de compras e ajoelhar-se para fazer uma breve oração.” <br> <br>Isso era algo completamente novo par a mim, pois eu só entrava em sinagogas e em igrejas protestantes p ara o culto religioso comunitário. Ali , em contra partida, estava alguém que acudia a uma igreja vazia em meio às ocupações diárias, como que para um diálogo confidencial com Deus . Disso nunca me esqueci” – relatou ela. <br> <br> outra cena deu-se na casa de um camponês católico onde ela se hospedara durante um passeio. Causoulhe profunda impressão ver esse pai de família fazer pela manhã uma oração com os seus empregados, antes de irem para os trabalhos do campo."
    },

    {
      texto: "Adolf Reinach – o amigo de Edith que, como ela, estava à busca da Verdade – faleceu em 1917. Visitando a viúva, Anna Reinach, surpreendeuse ao vê-la cheia de paz e serenidade, com mais esperança que sofrimento! Ficou atônita e, ao mesmo tempo, maravilhada quando esta lhe comunicou sua conversão e lhe explicou o papel da Cruz de Cristo.<br> <br> “Esse foi o meu primeiro encontro com a Cruz e com a força divina que ela transmite aos que a carregam. Foi o momento em que a minha descrença desmoronou” – confidenciou mais tarde. Por volta de 1918, Edith leu os Exercícios Espirituais de Santo Inácio de Loyola, por mero interesse acadêmico. <br> <br>Entretanto, ao perceber a densa espiritualidade contida nessa obra, fez os trinta dias de meditações, no fim dos quais desejou ardentemente se tornar católica. Todavia, precisou vencer ainda algumas batalhas interiores antes de chegar à c onversão definitiva. Esta chegou no verão de 1921. Edith foi convidada a passar algumas semanas na casa de campo de uma amiga em Bergzabern, perto de Spira. Certo dia, estando só na casa, apanhou ao acaso um livro na estante. Deus lhe punha nas mãos a “Vida de Santa Teresa de Ávila, escrita por ela mesma”. <br> <br>“Comecei a ler e fiquei tão arrebatada que não consegui parar até terminá-lo. Quando o fechei, disse comigo mesma: ‘Esta é a Verdade!'” Depois de procurar em vão a Verdade nos livros e nos raciocínios filosóficos, ela a encontrou na história palpitante de amor da grande mística reformadora do Carmelo, cujo exemplo perfumava ainda as almas, cinco séculos após sua morte. <br> <br>No dia seguinte, ela comprou o Catecismo e o Missal e, depois de estudar meticulosamente o conteúdo desses livros, foi pela Sta Teresa Benedita da Cruz primeira vez assistir a uma Missa, após a qual procurou o Pároco e pediu o Batismo, que lhe foi conferido poucos meses depois, no dia 1º de janeiro de 1922."
    },

    {
      texto: "Não foi por mero acaso que a Virgem Maria pôs nas mãos dessa alma a autobiografia da grande Santa Teresa. Já no dia de sua conversão ela sentiu-se de tal forma chamada à vida contemplativa na Ordem do Carmo que logo relegou todas as ambições mundanas e passou a levar uma vida de carmelita, tanto quanto lhe permitiam as circunstâncias. <br> <br>Entretanto, seu diretor espiritual, Mons. Canon Schwind, julgou mais proveitoso para a Igreja que ela empregasse seus talentos no apostolado leigo, e convidou-a a lecionar Alemão e História no Instituto de Educação de Santa Maria Madalena, em Spira. Ela fez então in pectore os votos de pobreza, obediência e castidade e tornou- se professora. <br> <br> A Fräulein Doktor (Senhorita Doutora), como ficou conhecida, expressava-se com perfeição em seis idiomas. Conhecia e traduzia com facilidade as obras de São Tomás de Aquino. No entanto, mais do que lecionar, ela se empenhava em “ajudar as alunas a moldar a vida no espírito de Cristo. <br> <br>E, persuadida de que “Frei Exemplo é o melhor pregador”, fazia seu apostolado principalmente através de uma autêntica vida de piedade: passava horas ajoelhada ante Jesus Sacramentado, como se nada mais existisse no mundo, e tinha uma profunda devoção ao Sagrado Coração de Jesus e à Virgem Maria."
    },

    {
      texto: "Entre 1928 e 1933, por iniciativa de um insigne sacerdote, percorreu a Europa, fazendo conferências sobre o papel da mulher católica na família e na sociedade, apresentando como modelo Maria, a Virgem Mãe. <br> <br> Em 1932 foi nomeada para a Cátedra de Antropologia no Instituto Alemão de Pedagogia Científica, de Münster. <br> <br> Nessa época, porém, sopravam já os maléficos ventos do nazismo, de modo que pouco tempo depois ela perdeu o posto, devido à sua ascendência judaica."
    },

    {
      texto: "Se para ela essa demissão arbitrária foi um bem ou um mal, não vem ao caso analisar neste artigo. O fato concreto é que no dia 14 de outubro de 1933 ela ingressou no Carmelo de Colônia. Em abril de 1934, recebeu o hábito carmelitano. Edith Stein estava morta para este mundo, nascia uma nova esposa de Cristo, Irmã Teresa Benedita da Cruz. <br> <br> Não lhe correu fácil o noviciado, tendo ela já 43 anos, e entre as freiras sua ciência filosófica pouco valia. Ademais, o trabalho manual era parte importante da vida monástica e Irmã Teresa era muito desajeitada… <br> <br> A mestra de noviças não deixava de repreendêla nas ocasiões oportunas, e ela nunca se mostrou ressentida. Pelo contrário, sabia que esses pequenos sacrifícios faziam parte de sua caminhada rumo à santificação, e aceitava tudo com serenidade. <br> <br>O falecimento de sua mãe, em 1936, deixou sua irmã Rosa livre para receber o Batismo, que desejavSanta Teresa Benedita da Cruz – Edith Stein.jpga ardentemente, e ser acolhida como terciária carmelita no mesmo mosteiro de Colônia. As duas irmãs permanecerão unidas até a morte."
    },

    {
      texto: "Na segunda metade da década de 1930, acentuava-se cada dia mais o antagonismo entre o partido nazista e o ensinamento da doutrina católica. O governo encabeçado por Hitler perseguia disfarçadamente a Igreja. Quando, em 1937, o Papa Pio XI condenou de maneira contundente o nacional- socialismo através da Encíclica Mit brennender Sorge (Com ardente preocupação), cresceu a animadversão dos hitleristas: acentuou-se a campanha anticlerical, muitos bispos foram agredidos em público e milhares de fiéis foram deportados para os campos de concentração. <br> <br> Para evitar que o Carmelo de Colônia corresse perigo por sua presença, Irmã Teresa Benedita pediu transferência para algum convento fora da Alemanha. Antes de ser atendido esse seu pedido, delegados do governo nazista violaram a clausura do mosteiro, à sua procura. À vista disso, ela foi transferida às pressas para o Carmelo de Echt, na Holanda. <br> <br> Um ano e meio depois, sua irmã Rosa foi se juntar a ela. Em julho de 1942, os Bispos holandeses tomaram posição formal contra os nazistas, em defesa dos judeus injustamente perseguidos. O revide do regime nazista não se fez esperar. <br> <br>No dia 2 de agosto, agentes da Gestapo arrancaram do convento as duas irmãs, que foram deportadas para o campo de concentração de Westerbork, norte da Holanda, juntamente com outros 242 judeus católicos. <br> <br> O comissário geral Schmidt, reconheceu de público que essa tirânica medida tinha sido tomada como retaliação à corajosa atitude do Episcopado: “Como o clero católico não se deixa dissuadir por nenhuma negociação, vemo-nos forçados a considerar os judeus católicos como os nossos piores inimigos e, por essa razão, a deportá-los para o Leste o mais depressa possível”."
    },

    {
      texto: "Compreende-se facilmente o desânimo e mesmo o desespero desses infelizes, arrancados com brutalidade de seus lares e transportados em vagões de carga para um campo de concentração. <br> <br> Irmã Teresa, porém, não se deixou abater. Nos poucos dias em que ali permaneceu, manteve-se galhardamente trajada com seu hábito de carmelita, a todos impressionando pela sua fortaleza de ânimo, serenidade e recolhimento. <br> <br> Todo o tempo em que a “Freira Alemã”, como era chamada, não passava em oração, ela o empregava em consolar os aflitos, confortar as mulheres e cuidar das crianças. <br> <br> Ela era uma “Pietà sem Cristo” – declarou uma testemunha sobrevivente."
    },

    {
      texto: "Em 7 de agosto, os esbirros do governo embarcaram Sor Teresa Benedita e sua irmã Rosa – juntamente com centenas de outros judeus – em um trem rumo ao campo de extermínio de Auschwitz-Birkenau. Uma tétrica viagem de quase três dias, sem água e sem alimentos. Logo na chegada, no dia 9, foram mortas na câmara de gás e em seguida seus corpos foram cremados e as cinzas espalhadas pelos campos. <br> <br> Edith Stein morreu vítima do odium fidei do regime hitleriano. O Pe. Hopster, SVD, afirma isso claramente: “Após ter ouvido as explicações do comissário Schmidt, pode-se declarar que os religiosos presos nesta ocasião foram mortos em testemunho da Fé. Sua prisão foi efetuada por ódio às palavras de nossos bispos. <br> <br> Eram, pois, os bispos e a Igreja os visados e atingidos com a deportação dos religiosos e católicos de origem judaica”. <br> <br>Somente em 1947 as carmelitas de Echt e Colônia tiveram notícia segura a respeito da morte de Santa Teresa Benedita da Cruz, e puderam transmiti- la às demais casas da Ordem: “Não mais a procuremos sobre a terra, mas junto de Deus a quem foi agradável o seu sacrifício, fazendo-o frutificar em favor do povo pelo qual rezou, sofreu e morreu”."
    },

    {
      texto: "Todos os momentos livres de sua vida de carmelita, e também parte da noite, Sor Teresa Benedita os dedicava à redação da obra “A Ciência da Cruz”, que lhe tinha sido encomendada para assinalar o quarto centenário do nascimento de São João da Cruz. <br> <br> Contudo, não logrou terminá-la. Ou melhor, ela a concluiu sim, mas não por escrito: a conclusão se efetivou com a entrega de sua própria vida. Da mesma forma que a Verdade eterna se manifestou ao mundo plenamente num Homem, Jesus, e não escrita num livro. <br> <br> Dela se pode dizer o que afirmou de si próprio o Apóstolo dos Gentios: combateu o bom combate, recebeu a coroa de glória. Foi canonizada em 1998 e, no ano seguinte, proclamada co-padroeira da Europa, junto com Santa Brígida e Santa Catarina de Sena."
    },

    {
      texto: "Revista Arautos do Evangelho, publicada em agosto de 2005, número 44, páginas 34 à 37."
    },
  ];


// COLETANDO ITENS BIOGRAFIA DESKTOP E ADICIONANDO FUNÇÕES DE CLIQUE

  const biografiaTitulo1 = document.getElementById('titulo1')
  const biografiaTitulo2 = document.getElementById('titulo2')
  const biografiaTitulo3 = document.getElementById('titulo3')
  const biografiaTitulo4 = document.getElementById('titulo4')
  const biografiaTitulo5 = document.getElementById('titulo5')
  const biografiaTitulo6 = document.getElementById('titulo6')
  const biografiaTitulo7 = document.getElementById('titulo7')
  const biografiaTitulo8 = document.getElementById('titulo8')
  const biografiaTitulo9 = document.getElementById('titulo9')
  const biografiaTitulo10 = document.getElementById('titulo10')
  const biografiaTitulo11 = document.getElementById('titulo11')
  const biografiaTitulo12 = document.getElementById('titulo12')
  const biografiaTitulo13 = document.getElementById('titulo13')
  const biografiaTitulo14 = document.getElementById('titulo14')
  const biografiasTextos = document.getElementById('biografias-textos')

  biografiaTitulo1.addEventListener('click', function () {

    biografiaTitulo1.classList.add('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[0].texto}</p>`
  })

  biografiaTitulo2.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.add('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[1].texto}</p>`
    
  })

  biografiaTitulo3.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.add('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[2].texto}</p>`

  })

  biografiaTitulo4.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.add('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[3].texto}</p>`
    
  })

  biografiaTitulo5.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.add('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[4].texto}</p>`
    
  })

  biografiaTitulo6.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.add('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[5].texto}</p>`
    
  })

  biografiaTitulo7.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.add('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[6].texto}</p>`
    
  })

  biografiaTitulo8.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.add('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[7].texto}</p>`
    
  })

  biografiaTitulo9.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.add('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[8].texto}</p>`
    
  })

  biografiaTitulo10.addEventListener('click', function () {
    
    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.add('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[9].texto}</p>`
    
  })

  biografiaTitulo11.addEventListener('click', function () {
    
    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.add('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[10].texto}</p>`
    
  })

  biografiaTitulo12.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.add('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[11].texto}</p>`
    
  })

  biografiaTitulo13.addEventListener('click', function () {

    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.add('biografia__titulos_click')
    biografiaTitulo14.classList.remove('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[12].texto}</p>`
    
  })

  biografiaTitulo14.addEventListener('click', function () {
    
    
    biografiaTitulo1.classList.remove('biografia__titulos_click')
    biografiaTitulo2.classList.remove('biografia__titulos_click')
    biografiaTitulo3.classList.remove('biografia__titulos_click')
    biografiaTitulo4.classList.remove('biografia__titulos_click')
    biografiaTitulo5.classList.remove('biografia__titulos_click')
    biografiaTitulo6.classList.remove('biografia__titulos_click')
    biografiaTitulo7.classList.remove('biografia__titulos_click')
    biografiaTitulo8.classList.remove('biografia__titulos_click')
    biografiaTitulo9.classList.remove('biografia__titulos_click')
    biografiaTitulo10.classList.remove('biografia__titulos_click')
    biografiaTitulo11.classList.remove('biografia__titulos_click')
    biografiaTitulo12.classList.remove('biografia__titulos_click')
    biografiaTitulo13.classList.remove('biografia__titulos_click')
    biografiaTitulo14.classList.add('biografia__titulos_click')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda_desktop"></span>
    <p> ${biografiaTitulos[13].texto}</p>`
    
  })


// COLETANDO ITENS DA BIOGRAFIA RESPONSIVA E ADICIONANDO FUNÇÕES DE CLIQUE

  const biografiaRespTitulo1 = document.getElementById('titulo1-responsive')
  const biografiaRespTitulo2 = document.getElementById('titulo2-responsive')
  const biografiaRespTitulo3 = document.getElementById('titulo3-responsive')
  const biografiaRespTitulo4 = document.getElementById('titulo4-responsive')
  const biografiaRespTitulo5 = document.getElementById('titulo5-responsive')
  const biografiaRespTitulo6 = document.getElementById('titulo6-responsive')
  const biografiaRespTitulo7 = document.getElementById('titulo7-responsive')
  const biografiaRespTitulo8 = document.getElementById('titulo8-responsive')
  const biografiaRespTitulo9 = document.getElementById('titulo9-responsive')
  const biografiaRespTitulo10 = document.getElementById('titulo10-responsive')
  const biografiaRespTitulo11 = document.getElementById('titulo11-responsive')
  const biografiaRespTitulo12 = document.getElementById('titulo12-responsive')
  const biografiaRespTitulo13 = document.getElementById('titulo13-responsive')
  const biografiaRespTitulo14 = document.getElementById('titulo14-responsive')

  biografiaRespTitulo1.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Santa Teresa Benedita da Cruz </strong><br><br> ${biografiaTitulos[0].texto}</p>`
    
  })

  biografiaRespTitulo2.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Jovem filósofa à procura da Verdade </strong><br><br> ${biografiaTitulos[1].texto}</p>`
    
  })

  biografiaRespTitulo3.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Descobre a oração do Pai-Nosso </strong><br><br> ${biografiaTitulos[2].texto}</p>`
    
  })

  biografiaRespTitulo4.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Enfermeira voluntária</strong><br><br> ${biografiaTitulos[3].texto}</p>`
    
  })

  biografiaRespTitulo5.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> A força do exemplo </strong><br><br> ${biografiaTitulos[4].texto}</p>`
    
  })

  biografiaRespTitulo6.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Enfim, a conversão</strong><br><br> ${biografiaTitulos[5].texto}</p>`
    
  })

  biografiaRespTitulo7.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Professora apostólica </strong><br><br> ${biografiaTitulos[6].texto}</p>`
    
  })

  biografiaRespTitulo8.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Conferencista e catedrática </strong><br><br> ${biografiaTitulos[7].texto}</p>`
    
  })

  biografiaRespTitulo9.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Uma noviça a caminho da santidade </strong><br><br> ${biografiaTitulos[8].texto}</p>`
    
  })

  biografiaRespTitulo10.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> “Os judeus católicos, nossos piores inimigos” </strong><br><br> ${biografiaTitulos[9].texto}</p>`
    
  })

  biografiaRespTitulo11.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Parecia uma imagem da “Pietà” sem o Cristo </strong><br><br> ${biografiaTitulos[10].texto}</p>`
    
  })

  biografiaRespTitulo12.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Morta por ódio à Fé católica </strong><br><br> ${biografiaTitulos[11].texto}</p>`
    
  })

  biografiaRespTitulo13.addEventListener('click', function () {
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> A conclusão do livro “A Ciência da Cruz” </strong><br><br> ${biografiaTitulos[12].texto}</p>`
    
  })

  biografiaRespTitulo14.addEventListener('click', function () {
    
    
    biografiaRespTitulo1.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.add('biografia__titulos_click_mobile')

    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> <strong> Créditos </strong><br><br> ${biografiaTitulos[13].texto}</p>`
    
  })


//FUNÇÃO QUE CARREGA PRIMEIRO TEXTO DO MENU MOBILE/DESKTOP QUANDO A PÁGINA CARREGA

  window.onload = function() {
    
    biografiaRespTitulo1.classList.add('biografia__titulos_click_mobile')
    biografiaRespTitulo2.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo3.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo4.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo5.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo6.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo7.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo8.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo9.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo10.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo11.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo12.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo13.classList.remove('biografia__titulos_click_mobile')
    biografiaRespTitulo14.classList.remove('biografia__titulos_click_mobile')
    
    biografiasTextos.innerHTML =
    `<span class="biografia__textos_borda"></span>
    <p> ${biografiaTitulos[0].texto}</p>`

  }

