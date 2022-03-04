function carregar() {
  //cria variáveis para puxar os id's de mensagem e imagem
  const mensagem = document.getElementById('mensagem');
  const imagem = document.getElementById('imagem');

  //puxa a data atual
  const data = new Date();
  //puxa a hora atual
  const hora = data.getHours();

  mensagem.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    imagem.src = './img/manha.png';
    document.body.style.background = '#e2cd9f';
    document.querySelector('p').style.color = 'black';
    document.querySelector('h1').style.color = 'black';
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    imagem.src = './img/tarde.png';
    document.body.style.background = '#b9846f';
  } else {
    //BOA NOITE
    imagem.src = './img/noite.png';
    document.body.style.background = '#515154';
  }
}
