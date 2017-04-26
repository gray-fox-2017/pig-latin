const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("Tulislah sesukamu => ");
rl.prompt();

rl.on('line', (input) => {
  input = input.split(' ')
  console.log(pigLatin(input));
  rl.prompt();
});


function pigLatin(sentence) {
  // console.log(sentence);
  // Your pig latin implementation here...
  var vowel = /[aioue]/i;
  var kons = /[^aioue]*/i;
  var bukan = [];
  for (var i = 0; i < sentence.length; i++) {
  if (vowel.test(sentence[i][0]) === true) {
    bukan.push(sentence[i]);
  }
  else {
    var hilang = sentence[i].replace(kons, "");
    var match = sentence[i].match(kons);
    bukan.push(hilang + match + 'ay');
  }
  }
  return bukan.join(' ');
  }
