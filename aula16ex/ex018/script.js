const numero = document.getElementById('numero');
const lista = document.getElementById('lista');
const resultado = document.getElementById('resultado');
let valores = [];

//verifica se o número está entro o 1 e 100
function isNumero(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true;
  } else {
    return false;
  }
}

//verifica se o número ta na lista
function inLista(numero, lista) {
  //o -1 indica que o valor não foi encontrado na lista
  if (lista.indexOf(Number(numero)) != -1) {
    //se isso for verdade
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  //adiciona a lista se o valor for um número e se não estivar na lista
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    //adiciona um valor ao array valores
    valores.push(Number(numero.value));
    //cria um elemento option
    let item = document.createElement('option');
    //adiciona o conteúdo texto do elemento option
    item.text = ` Valor ${numero.value} adicionado`;
    //adiciona o elemento option a lista como elemento filho
    lista.appendChild(item);
    //se adicionar um elemento ao select o resultado será limpado
    resultado.innerHTML = '';
  } else {
    alert('Valor inválido ou já encontrado na lista.');
  }
  //tira o valor digitado ao adicionar no select e dá o foco ao campo de digitação
  numero.value = '';
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar!');
  } else {
    //pega o total de elementos que o vetor possui
    let total = valores.length;
    //maior e menor número
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      //soma o valor atual com o próximo para que dê o valor total
      soma += valores[pos];
      //verifica se a posição do item em valores é maior que a variável maior para pegar o maior número
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      //verifica se a posição do item em valores é menor que a variável menor para pegar o menor número
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    media = soma / total;
    resultado.innerHTML = '';
    resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
  }
}
