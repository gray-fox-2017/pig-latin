"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'cek huruf vowel =>'
});

function print(){
  rl.prompt()
rl.on('line', (kalimat) =>{
  console.log(pigLatin(kalimat));
  rl.close()
});
}

print();

function pigLatin(sentence) {
  var newArr = sentence.split(' ');
  var hasil = [];

  for(let i = 0; i<newArr.length; i++){
    hasil.push(cek_word(newArr[i]));
  }
  return hasil.join(' ');
}

function cek_word(word){
    var regex = /[aiueo]/i;
    var vowel = word.match(regex);

    if(vowel.index == 0){
      return word;
    }else {

      return word.substr(vowel.index)+word.substr(0,vowel.index)+'ay';
    }
  }
