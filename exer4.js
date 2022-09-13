const prompt = require('prompt-sync')();

const n1 = parseInt(prompt('Digite o primeiro número: '));
const n2 = parseInt(prompt('Digite o segundo número: '));
const n3 = parseInt(prompt('Digite o terceiro número: '));

const R = Math.pow(n1 + n2, 2);
const S = Math.pow(n2 + n3, 2);
const D = (R + S) / 2

console.log(`o valor da equação é: ${D}`)
