const prompt = require('prompt-sync')();
const anos = parseInt(prompt('quantos anos você já viveu: '));

const meses = parseInt(prompt('quantos meses você já viveu: '));

const dias = parseInt(prompt('quantos dias você já viveu: '));

const idadeT = ((anos * 365) + (meses * 30) +(dias * 1) );

console.log(`seu total de dias vividos é de: ${idadeT}`);

