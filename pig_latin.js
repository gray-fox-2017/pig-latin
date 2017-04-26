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
    if(/^[aiueo]\w+/g.test(arr[i])) {
      arr[i]=arr[i];
    } else {
      let vowel=arr[i].match(/[aiueo]\w+/g);
      let cons=arr[i].replace(vowel,'')
      if(vowel!==null) {
        arr[i]=vowel+cons+'ay';
      } else {
        arr[i]+='ay';
      }
    }
  }
  return arr.join(' ');
}
