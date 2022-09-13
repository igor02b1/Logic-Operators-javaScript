const prompt = require('prompt-sync')();

const totalTemp = parseInt(prompt('quanto foi a duração do evento em segundos: '));
const horas = Math.trunc(totalTemp/3600);
const minutos =  Math.trunc((totalTemp % 3600)/60);
const segundos = (totalTemp % 3600)%60;

console.log(`o evento teve duração de ${horas} horas, ${minutos} minutos e ${segundos} segundos`)
