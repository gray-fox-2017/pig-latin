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
  if(/^[aiueo]\w+/g.test(sentence)) return sentence;
  let vowel=sentence.match(/[aiueo]\w+/g);
  let cons=sentence.replace(vowel,'')
  return vowel+cons+'ay';
}

// pigLatin('tes')
