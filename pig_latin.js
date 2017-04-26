"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.setPrompt('Masukkan kata!>')
rl.prompt();
rl.on('line', (line) => {
  pigLatin(line);
 var akhir = pigLatin(line);
  console.log(`Sandi Babi: ${akhir}`);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var vowel = ['a', 'e', 'i', 'e', 'o'];
  var word = sentence.split(' ');

  for (let i=0;i<word.length;i++) {
    if (/^[aiueo]/gi.test(word[i])) {

    } else if (/[aiueo]/gi.test(word[i]) === false) {
       var baru = word[i].concat('ay');
       word[i] = baru
    } else if (/[aiueo]/gi.test(word[i])) {
      var hasil = word[i].match(/[aiueo]/i);
      var awal = word[i].substring(hasil.index, (word[i].length));
      var akhir = word[i].substring(0, (hasil.index)) + 'ay';
      var baru = awal.concat(akhir);
      word[i] = baru;
    }
  }

  return word.join(' ');
}
