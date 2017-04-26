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
  let arrStr = str.split('');
  let len = arrStr.length;
  let itemp = 0;

  for (let i = 0 ; i < len; i++) {
    let tchar = str[i];
    if (tchar.search(/[aiueo]/i) === -1) {
      arrStr.splice(itemp,1);
      arrStr.push(tchar+'ay');
    } else {
      itemp += 1;
    }
  }
  return arrStr.join('');
}
