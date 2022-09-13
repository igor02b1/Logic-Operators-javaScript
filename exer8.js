const prompt = require('prompt-sync')();
const custoFab = parseFloat(prompt('Digite o valor de custo de fabrica: '));
const porcDistri = custoFab * 0.28;
const Impostos = custoFab * 0.45;
const custoconsumidor = custoFab + porcDistri + Impostos;
console.log(`O custo do consumidor é de R$: ${custoconsumidor}`)