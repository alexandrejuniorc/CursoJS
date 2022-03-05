function verificar() {
  //pega a data atual
  const data = new Date();
  // pega o ano atual
  const ano = data.getFullYear();

  //pega o ano que veio direto do formulario
  const anoFormulario = document.getElementById('ano');

  //pega o resultado
  const resultado = document.getElementById('resultado');

  //verificação de ano
  if (anoFormulario.value.length == 0 || anoFormulario.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    const fSex = document.getElementsByName('radSex');

    const idade = ano - Number(anoFormulario.value);

    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    let genero = '';

    //VERIFICA GÊNERO MASCULINO
    if (fSex[0].checked) {
      genero = 'Homem';
      //VERIFICA EM QUAL FASE DA VIDA A PESSOA ESTÁ
      if (idade >= 0 && idade <= 10) {
        //CRIANÇA
        img.setAttribute('src', './img/bebe-m.png');
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute('src', './img/jovem-m.png');
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', './img/adulto-m.png');
      } else {
        //IDOSO
        img.setAttribute('src', './img/velho-m.png');
      }
    }
    //VERIFICA GÊNERO FEMININO
    else if (fSex[1].checked) {
      genero = 'Mulher';
      //VERIFICA EM QUAL FASE DA VIDA A PESSOA ESTÁ
      if (idade >= 0 && idade <= 10) {
        //CRIANÇA
        img.setAttribute('src', './img/bebe-f.png');
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute('src', './img/jovem-f.png');
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute('src', './img/adulto-f.png');
      } else {
        //IDOSO
        img.setAttribute('src', './img/velho-f.png');
      }
    }

    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade `;
    resultado.appendChild(img);
  }
}
