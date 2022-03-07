function tabuada() {
  const numero = document.getElementById('numero');
  const tabuada = document.getElementById('tabuada');

  if (numero.value.length == 0) {
    alert('Por favor, digite um número!');
  } else {
    let n = Number(numero.value);
    for (c = 1; c <= 10; c++) {
      let item = document.createElement('option');
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tabuada${c}`;
      tabuada.appendChild(item);
    }
  }
}
