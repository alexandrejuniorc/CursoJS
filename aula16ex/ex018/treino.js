const numero = document.getElementById('numero');
const lista = document.getElementById('lista');
const resultado = document.getElementById('resultado');
let valores = [];

function verificaValor(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true;
  } else {
    return false;
  }
}

function naLista(numero, lista) {
  if (lista.indexOf(Number(numero)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (verificaValor(numero.value) && !naLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement('option');
    item.text = ` Valor ${numero.value} adicionado`;
    lista.appendChild(item);
    resultado.innerHTML = '';
  } else {
    alert('Valor inválido ou já encontrado na lista.');
  }
  numero.value = '';
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar!');
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = soma / total;

    for (let posicao in valores) {
      soma += valores[posicao];

      if (valores[posicao] > maior) {
        maior = valores[posicao];
      }
      if (valores[posicao] < menor) {
        menor = valores[posicao];
      }
    }

    resultado.innerHTML = `<p>Ao todo temos ${total} números cadastrados</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
  }
}
