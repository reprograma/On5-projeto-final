# Projeto M-de-Maravilhosa

Projeto final do Bootcamp Online de Front-end.

## Sobre o projeto

Precisamos falar sobre mulheres que mudaram o mundo!

- [Like a girl](https://youtu.be/XjJQBjWYDTs)
- [Microsoft](https://youtu.be/tNqSzUdYazw)

- Projeto da [turma anterior](https://reprograma.github.io/CursoOnline-Aula8-Projeto/)

## Etapas do projeto

1. Escolha uma personalidade maravilhosa que te inspira.
2. Crie a página de perfil da _Maravilhosa_.
3. Insira na página principal o nome e a foto de sua _Maravilhosa_.
4. Inclua um link para a página do seu perfil (criada no Workshop) ao final da página de perfil da sua _Maravilhosa_.

## Orientações gerais

- Clonar este repositório: `git clone https://github.com/reprograma/On5-projeto-final.git`
- Crie sua branch: `git checkout -b seunome`, ex: `git checkout -b cintiafumi`
- **Atenção**: Alterar somente em `index.html` onde houver seu nome, de acordo com o modelo abaixo:
```html
  <div class="maravilhosas__perfil">
    <a href="./maravilhosas/seu-nome/sua-maravilhosa.html">
      <img class="img-responsive" src="./maravilhosas/seu-nome/img/foto-da-maravilhosa.jpg" alt="descrição" />
      <p>Nome da Maravilhosa Escolhida</p>
    </a>
  </div>
```
- Adicione uma pasta com seu-nome dentro da pasta `maravilhosas`, ex: _cintia-fumi_ (deixamos uma pasta com o nome `lydia-rodrigues` como modelo para você ver a estrutura)
- Dentro da pasta `seu-nome`, crie um arquivo HTML com o nome da personalidade, ex: _ada-lovelace.html_
- Dentro da sua pasta, crie também as pastas de imagens, CSS e JS
- Praticar HTML, CSS, responsividade (_mobile first_), efeitos com JS e alguma lib opcional (por exemplo, jQuery e/ou Bootstrap).

## Requisitos

- A entrega do projeto até 24/07/2020 às 23h59 é obrigatória para o recebimento do certificado de conclusão do curso.
- A entrega deverá ser feita através de Pull Request no Github. Você pode fazer quantos commits quiser na sua branch para ir salvando seu projeto, porém faça _somente um Pull Request_, quando for fazer sua entrega final.
- Sua página pessoal deverá ter o mesmo cabeçalho (`<header>`) e rodapé (`<footer>`) da página principal.
- Para a entrega do seu projeto ser considerada válida, ele deve contemplar: CSS responsivo, no mínimo um `eventListener` (botão, efeito de CSS, slider, efeito de rolagem, etc) feito com JS puro ou utilizando alguma biblioteca, mínimo de duas seções no HTML.


### Instalação de extensões no VSCode

- No VSCode, ir em File > Preferences > Extensions
- Busque pelo nome da extensão e instale-a
- Instale a extensão Live Server

<img src='./img/live-server.png' alt='Live Server extension' />

- Instale a extensão EditorConfig

<img src='./img/editorconfig.png' alt='EditorConfig extension' />

### Configurando Live Server

- Ir em **File > Preferences > Settings**
- Na aba **User > Extensions > Live Server Config > Settings: Custom Browser**, selecionar chrome

<img src='./img/live-server-config.png' />

### Rodando Live Server

- **VSCode**: habilite o Live Server clicando em **Go Live**

<img src='./img/live.png' alt='Go Live button' />

- Deverá abrir seu navegador com o endereço similar a: `http://127.0.0.1:5500/index.html`

### Verificando seu IP

- **Git Bash**:
  - Digite no Git Bash `ipconfig` ou `ipconfig //all`
  - Verifique o endereço IPv4. Deverá ser similar a: `192.168.X.X`

<img>

Ou...

- **Windows 10**: verifique seu IP conforme [instruções](https://support.microsoft.com/pt-br/help/4026518/windows-10-find-your-ip-address);

### Verificando seu site pelo navegador do celular

- Deixar o notebook e o celular conectados na mesma rede privada de internet (WiFi ou Dados).
- No navegador do seu celular, digite o endereço do seu IP seguido do número da porta aberta pelo Live Server `númeroIP:númeroPorta`, ex: `192.168.X.XX:5500`

Obs: Se estiver usando uma rede pública de internet, talvez não seja possível acessar o projeto desta maneira. Se este for o caso, uma solução seria compartilhar sua rede de dados com seu notebook.
