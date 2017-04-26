"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "masukkan kalimat > "
});

rl.prompt();
rl.on('line', (line) => {
  let vowelRegx = new RegExp("^[a|i|u|e|o]","gi");
  let wordRegx = new RegExp("[a-z]", "gi")
  let str = [];
  let finalWord = "";
  let lineArr = line.split(" ");
  console.log(lineArr);
  for (let i = 0; i < lineArr.length; i++) {
    if (vowelRegx.test(lineArr[i])) {
      str.push(lineArr[i]);
      console.log("ini vowel !! ");
      console.log(str);
    } else if (wordRegx.test(lineArr[i])) {
      let nextWord = lineArr[i].slice(1);
      let finalWord = nextWord + lineArr[i].charAt(0) + "ay";
      str.push(finalWord);
      console.log("bukan vowel !!");
      console.log(str);
    } 
  }
  finalWord = str.join(" ");
  console.log(`Received: ${line}`);
  console.log(`modif: ${finalWord}`);
}).on('close', () => {
  console.log("makasih");
  process.exit(0);
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
}
