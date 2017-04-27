//src https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Algorithm-Pig-Latin
const readline = require('readline');
const prompts = readline.createInterface({
                input: process.stdin,
                output : process.stdout,
                prompt : 'Masukkan text '
});

prompts.prompt();
prompts.on('line',(sentence) => {
  translateOneSentence(sentence);
  prompts.prompt();
});

function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str ;
  } else {
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }
  // console.log(pigLatin);
  return pigLatin;
}

function translateOneSentence(sentence) {
  let result = [];
  let sentence_split = sentence.split(' ');
  for (let j = 0; j < sentence_split.length; j++){
    result.push(translatePigLatin(sentence_split[j]))
  }
  console.log(result.join(" "));
}
