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
  let is_kons = str.search(/[aiueo]/i); //tes kons ato bukan
  let has_kons = str.search(/[^aiueo]/i);
  let idx_v = str.search(/[aiueo]/gi); //cari index pertama vowel
  let len = str.length;
  if (is_kons === -1) str += 'ay';
  else if (has_kons !== -1 && idx_v !== -1) {

    let c_v = str.charAt(idx_v);
    let n_len = (idx_v === len-1)? 0 : idx_v;
    // console.log('idxV'+idx_v);
    // console.log('n_len '+n_len);
  	// console.log('1 '+str.substr(idx_v));
  	// console.log('2 '+str.substr(0,idx_v));
    str = `${str.substr(idx_v)}${str.substring(0,idx_v)}ay`;

  }


  return str;
}
