const prompt = require('prompt-sync')();
const n1 = 2 * parseFloat(prompt('Digite o valor da primeira nota: '));
const n2 = 3 * parseFloat(prompt('Digite o valor da segunda nota: '));
const n3 = 5 * parseFloat(prompt('Digite o valor da terceira nota: '));
 
const mediaTotal = (n1 + n2 + n3)/10

console.log(`Sua média final foi de: ${mediaTotal}`)
