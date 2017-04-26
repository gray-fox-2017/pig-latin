"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Silahakan Masukkan Kalimat ?');
rl.prompt();

rl.on('line', (input) => {
  input=input.split(' ');
  console.log(pigLatin(input));
  rl.prompt();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
    let regVowel= /[aiueo]/i;
    let nonVowel=/[^aiueo]*/i;
    let result=[];
      for(var i = 0 ; i < sentence.length ; i++ ){
        if(sentence[i][0] == true){
           result.push(sentence[i]);
        }else {
          let remove=sentence[i].replace(nonVowel, "");
          let matching=sentence[i].match(nonVowel);
          result.push(remove + matching + "ay");
        }

    }
    return result.join(' ');
}
