let num = [5, 8, 2, 9, 3];
num.push(1); //adiciona um valor ao inicio da array

num.sort(); //organiza os números em ordem númericas

//console.log(`O vetor tem ${num.length} posições`);
//console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(2); //verifica a posição do index
if (pos == -1) {
  console.log('O valor não foi encontrado!');
} else {
  console.log(`O valor está na posição ${pos}`);
}
