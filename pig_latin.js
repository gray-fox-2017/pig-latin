"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pigLatin(sentence) {
  // Your pig latin implementation here...

    rl.setPrompt('please write something text : ');
    rl.prompt();

    rl.on('line',(TextTulisan) => {
        TextTulisan = TextTulisan.split(" ");
        var arrBaru = [];
        for(var i = 0; i<TextTulisan.length; i++) {
            var result = TextTulisan[i].match(/[aiueoAIUEO]/);
            var txtPotong = TextTulisan[i].substring(0, result.index);
            if (result.index != 0) {
                TextTulisan[i] = TextTulisan[i].slice(result.index);
                arrBaru.push("" + TextTulisan[i] + "" + txtPotong + "ay");
            }
            else {
                arrBaru.push(TextTulisan[i]);
            }
        }
        console.log(arrBaru.join(" "));
        rl.prompt();

    }).on('close', () =>{
        console.log("Bye bye");
        process.exit(0);
    })
}


pigLatin();
