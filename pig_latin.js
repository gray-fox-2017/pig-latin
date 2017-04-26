"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Your Inout here> '
})

rl.prompt();
rl.on('line', (line)=>{
  console.log(`your pig latin words is : ${pigLatin(line)}`);
  rl.prompt();
}).on('close', ()=>{
  console.log(`bye bye`);
  process.exit(0);
})

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var regex = /[aiueo]/i;
  var str = sentence.split(' ');
  var print = [];
  for (let i=0; i<str.length; i++){
    var result = str[i].match(regex);
    if (result.index !== 0){
      print.push(str[i].substr(result.index)+str[i].substr(0, result.index)+'ay')
    }
    else {
      print.push(str[i]);
    }
  }
  return print.join(' ');
}
