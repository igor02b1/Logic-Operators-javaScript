const prompt = require('prompt-sync')();
const A = parseInt(prompt('Digite o valor de A: '));
const B = parseInt(prompt('Digite o valor de B: '));
const C = parseInt(prompt('Digite o valor de C: '));
const D = parseInt(prompt('Digite o valor de D: '));
const E= parseInt(prompt('Digite o valor de E: '));
const F = parseInt(prompt('Digite o valor de F: '));

const x = ((C * E) - (B * F)) / ((A * E) - (B * D));
const y = ((A * F) - (C * D)) / ((A * E) - (B * D));

console.log(`Os valores da equação linear é de X: ${x} e de Y; ${y}`)
