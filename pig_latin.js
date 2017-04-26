"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please insert the word that you\'d like to be pig-latinized: ', (answer) => {
  console.log('The pig latinized word is: ', pigLatin(answer));
  // console.log(`${answer} is going to be pig latinized.`);
});

rl.on('close', function() {
    console.log('Thanks for playing!');
    process.exit(0);
});

function pigLatin(sentence) {
  let isThereVowel = sentence.search(/[aiueo]/i);
  console.log(isThereVowel);
  let pigLatinized = "";
  if (isThereVowel>=0) {
    let indexVowel = sentence.match(/[aiueo]/i).index;
    pigLatinized = sentence.substring(indexVowel) + sentence.substring(0,indexVowel) + "ay";
  }
  else {
    pigLatinized = sentence + "ay";
  } 
  return pigLatinized
}
