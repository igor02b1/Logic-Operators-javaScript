const prompt = require('prompt-sync')();

const totalDeDias = parseInt(prompt('quantos dias você já viveu: '));

const anos = Math.trunc(totalDeDias/365);
const meses =  Math.trunc((totalDeDias % 365)/30);
const dias = (totalDeDias % 365)%30;

console.log(`você tem ${anos} anos, ${meses} meses e ${dias} dias`);