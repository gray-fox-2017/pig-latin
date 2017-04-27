"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sentence='';
rl.question('Type a word! ', (answer) => {
  sentence=answer;
  console.log(pigLatin(sentence));
});
rl.on('close', function() {
  console.log('Bye!');
  process.exit(0);
});

function pigLatin(sentence) {
  let arr=sentence.split(' ');

  for(let i=0;i<arr.length;i++) {
    let word = arr[i]
    let firstCharacterIsVowel = /^[aiueo]/g.test(word)
    if(!firstCharacterIsVowel){
      let vowel = word.match(/[aiueo]\w+/g);
      let cons  = word.replace(vowel,'')
      if(vowel!==null) {
        word = vowel+cons+'ay';
      } else {
        word += 'ay';
      }
    }
  }
  return arr.join(' ');
}
