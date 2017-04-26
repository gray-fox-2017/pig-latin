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

function pigLatin (sentence) {
  let arrSentence = sentence.split(" ");
  for (let i=0; i<arrSentence.length; i++) {
    arrSentence[i] = pigLatine(arrSentence[i]);
  }
  return arrSentence.join(" ");
}

function pigLatine(word) {
  let isThereVowel = word.search(/[aiueo]/i);
  let pigLatinized = "";
  if (isThereVowel>=0) {
    let indexVowel = word.match(/[aiueo]/i).index;
    if (indexVowel === 0) {
      pigLatinized = word;
    }
    else{
      pigLatinized = word.substring(indexVowel) + word.substring(0,indexVowel) + "ay";
    }
  }
  else {
    pigLatinized = word + "ay";
  } 
  return pigLatinized
}
