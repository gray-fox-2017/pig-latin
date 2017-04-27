"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> Please input words :'
});

rl.prompt();

rl.on('line', (input)=>{
console.log(`Your pigLatin was: ${pigLatin(input)}`);
rl.prompt();
}).on('close', () =>{
  console.log(' You have exit piglatin game !!');
  process.exit(0)
});



function pigLatin(sentence) {
  // Your pig latin implementation here...
  var words = sentence.split(" ");
  var vowel = /[aiueo]/i ;
  var str =[];
  for (var i = 0; i < words.length ; i++){
    var result = words[i].match(vowel);
    if(result.index === 0){
      str.push(words[i])
    }else{
      str.push(words[i].substr(result.index)+ words[i].substr(0, result.index) +'ay')
    }
  }
  return str.join(" ");
}

// console.log(pigLatin("sama amu"));
