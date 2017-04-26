"use strict"

//use readline to fix this challenge
//const readline = require('readline');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('>>> ');
rl.prompt();
rl.on('line', (line) => {
  pigLatin(line);
  rl.prompt()
});
rl.on('close', () => {
  console.log(`\nbyee`);
  process.exit(0)
})

function pigLatin(sentences) {
  // Your pig latin implementation here...
  let sentencesArray = sentences.split(' ');
  let sentencesArray2 = [];
  for(let i=0;i<sentencesArray.length;i++){
    let firstVowelCheck = /^[aiueo]/i.test(sentencesArray[i]);
    if(firstVowelCheck) {
      sentencesArray2.push(sentencesArray[i])
    } else {
      let sliceLeft = sentencesArray[i].slice(0,sentencesArray[i].search(/[aiueo]/i));
      let sliceRight = sentencesArray[i].slice(sentencesArray[i].search(/[aiueo]/i));
      sentencesArray2.push(`${sliceRight}${sliceLeft}ay`)
    }
  }
  console.log(sentencesArray2.join(' '));
}
