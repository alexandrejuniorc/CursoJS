function tabuada() {
  const numero = document.getElementById('numero');
  const tabuada = document.getElementById('tabuada');

  if (numero.value.length == 0) {
    alert('Por favor, digite um número!');
  } else {
    //vai ser a variável do número que o usuário digitar
    let n = Number(numero.value);

    for (contador = 1; contador <= 10; contador++) {
      //cria o elemento option
      let item = document.createElement('option');

      //adiciona conteúdo dentro do elemento item
      item.text = `${n} x ${contador} = ${n * contador}`;

      //adiciona value ao option
      item.value = `tabuada${contador}`;

      //adiciona filho item
      tabuada.appendChild(item);
    }
  }
}
