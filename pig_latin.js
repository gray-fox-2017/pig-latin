"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Input Kata : " //prompt inisialisasi yang dimunculkan awal kali program berjalan
});

rl.prompt(); //memunculkan prompt
rl.on('line', (sentence) => {
  sentence = sentence.split(' ');
  console.log(pigLatin(sentence)); //memanggil function pigLatin
  rl.prompt(); //memunculkan kemmbali prompt
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let vowels = /[aiueo]/i;
  let konsonan = /[^aiueo]*/i;
  let hasil = [];
  for (let i = 0; i <sentence.length; i++) {
    if (vowels.test(sentence[i].substring(0,1)) == true) {
      hasil.push(sentence[i]);
    } else {
      let toVowels = sentence[i].replace(konsonan, ""); //menjadikan konsonan menjadi vowels dengan mengganti nilai konsonan dengan str blank ""
      let toKonsonan = sentence[i].match(konsonan); // me match nilai konsonan
      hasil.push(toVowels + toKonsonan + 'ay');
    }

  }
  return hasil.join(' ')
}
