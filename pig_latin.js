"use strict"

//use readline to fix this challenge
const readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Convert to pig-latin: ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
  console.log('Hasil : '+convertAll(answer));

});

function convertAll(sentence){
  let res = [];
  let arrSen = sentence.split(' ');
  let len = arrSen.length;

  arrSen.forEach((str)=>{
    res.push(pigLatin(str));
  });
  return 'Perubahan : '+res.join(' ')+' ; Kata yang berubah: '+len;
}

function pigLatin(str) {
  let idx_v = str.search(/[aiueo]/gi); //cari index pertama vowel
  let len = str.length;
  if (idx_v === -1) str += 'ay';
  else if (idx_v !== 0) {
    str = `${str.substr(idx_v)}${str.substring(0,idx_v)}ay`;

  }


  return str;
}
