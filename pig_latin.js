"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input sentence: ", (input) => {
  console.log("Answer: ", pigLatin(input));
});

rl.on("close", () => {
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
      arrayPigLatin.push(value.slice(index) + "ay");
    } else {
      arrayPigLatin.push(value.slice(index) + value.slice(0, index) + "ay");
    }
  });

  return arrayPigLatin.join(" ");
}
