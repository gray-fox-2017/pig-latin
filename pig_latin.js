"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Input sentence: ");
rl.prompt();

rl.on('line', (input) => {
  console.log(pigLatin(input));
}).on('close', () => {
  console.log("bye");
  process.exit(0);
});

function pigLatin(sentence) {
  sentence = sentence.toLowerCase();
  let arraySentence = sentence.split(" ");
  let arrayPigLatin = [];

  arraySentence.forEach(value => {
    let index = value.search(/[aiueo]/i);

    if (index === 0) {
      arrayPigLatin.push(value);
    } else {
    arrayPigLatin.push(value.slice(index) + value.slice(0, index) + "ay");
    }
  });

  return arrayPigLatin.join(" ");
}
