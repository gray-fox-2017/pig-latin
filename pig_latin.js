"use strict"

//use readline to fix this challenge
const readline = require('readline');

function pigLatin(sentence) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.setPrompt('Masukan input: ');
  rl.prompt();
  rl.on('line', (line) => {
    console.log(`Kata Anda: ${line}`);
    var arr = line.split(' ');
    var newWord = [];
    for(var i=0; i<arr.length; i++){
      if (/^[aeiou]/.test(arr[i])){
        newWord.push(arr[i]);
      } else if (/([b-df-hj-np-tv-z])\1{2,}/.test(arr[i])){
        var word = arr[i] + 'ay.'
        newWord.push(word)
      } else {
        var consonants = arr[i].match(/.+?(?=[aiueo])/)[0];
        var word = arr[i].match(/[aiueo].*$/)[0] + consonants + 'ay.';
        newWord.push(word);
      }
    }
    var joinWord = newWord.join(' ');
    console.log(joinWord);
    rl.prompt();
  }).on('close', ()=> {
    console.log('Have a great day!');
    process.exit(0);
  })
  // Your pig latin implementation here...
}

pigLatin();
