function contar() {
  const inicio = document.getElementById('inicio');
  const fim = document.getElementById('fim');
  const passo = document.getElementById('passo');
  const resultado = document.getElementById('resultado');

  //validacao
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('[ERRO] Faltam dados!');
    resultado.innerHTML = 'Impossível contar';
  } else {
    resultado.innerHTML = 'Contando: <br>';

    //transforma os dados em números
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    // se o passo for menor ou igual a 0
    if (p <= 0) {
      alert('Passo inválido! Considerando PASSO 1');
      p = 1;
    }

    //se o valor do inicio for menor que o do final
    if (i < f) {
      //enquanto contador for menor ou igual ao fim ele recebe o próprio contador mais o passo
      for (let contador = i; contador <= f; contador += p) {
        resultado.innerHTML += `${contador} \u{1F449}`;
      }
    } else {
      for (let contador = i; contador >= f; contador -= p) {
        resultado.innerHTML += `${contador} \u{1F449}`;
      }
    }
    //emote da bandeira de chegada para o último valor da contagem
    resultado.innerHTML += `\u{1F3C1}`;
  }
}
