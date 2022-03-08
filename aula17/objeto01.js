let amigo = {
  nome: 'Jose',
  sexo: 'M',
  peso: 85.4,
  engorgar(p = 0) {
    console.log('Engordou');
    //this é uma autoreferência ao objeto
    //p é o valor passado
    this.peso += p;
  },
};
//faz a função engordar funcionar e adiciona o valor ao peso da pessoa
amigo.engorgar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} KG`);
