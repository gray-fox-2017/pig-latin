"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Convert your words into pig latin here =>`
});



function pigLatin(word){
  var vowel = /[aiueo]/gi

  if (vowel === null){
    return word + "ay"
  }

  if (word.charAt(0) === "a" || word.charAt(0) === "i" || word.charAt(0) === "u" || word.charAt(0) === "e" || word.charAt(0) === "O"
    || word.charAt(0) === "A" || word.charAt(0) === "I" || word.charAt(0) === "U" || word.charAt(0) === "E" || word.charAt(0) === "O"){
      return word;
  }

  else {
    let firstvowel = word.indexOf(word.match(vowel)[0]);
    var pig = word.substr(firstvowel) + word.substr(0,firstvowel) + "ay";
  }
  return pig;
}

function pigLatin2(sentence) {
  let result = []
  let split = sentence.split(" ")
  for (let i = 0; i < split.length; i++){
    result.push(pigLatin(split[i]))
  }
  return result.join(" ")
}

function pigread(){
  rl.prompt();
  rl.on(`line`,(input)=>{
    console.log(pigLatin2(input));
    rl.close();
  })
}
pigread()
