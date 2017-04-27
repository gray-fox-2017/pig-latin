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
  console.log(pigLatin(line));
rl.prompt();
}).on('close', () => {
  console.log("makasih");
  process.exit(0);
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let vowelRegx = /^[a|i|u|e|o]/gi;
  let notVowelRegx = /[^aiueo]+/;
  let strArr = [];
  let finalWord = "";
  let lineArr = sentence.split(" ");
  for (let i = 0; i < lineArr.length; i++) {
    if (vowelRegx.test(lineArr[i])) {
      strArr.push(lineArr[i]);
      // console.log(str);
    } else if (notVowelRegx.test(lineArr[i])) {
      let firstWord = lineArr[i].replace(notVowelRegx, "");
      let backWord = lineArr[i].match(notVowelRegx)[0];
      let finalWord = firstWord + backWord + "ay";
      strArr.push(finalWord);
      // console.log(str);
    }
  }
  finalWord = strArr.join(" ");
  return finalWord;

}
