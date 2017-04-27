"use strict"

//use readline to fix this challenge
const readline = require('readline');


function pigLatin(sentence) {
  // Your pig latin implementation here...

        sentence = sentence.split(" ");
        var arrBaru = [];
        for(var i = 0; i<sentence.length; i++) {
            var result = sentence[i].match(/[aiueoAIUEO]/);
            if(result == null){
                arrBaru.push(sentence[i]);
            }
            else {
                var txtPotong = sentence[i].substring(0, result.index);
                if (result.index != 0) {
                    sentence[i] = sentence[i].slice(result.index);
                    arrBaru.push("" + sentence[i] + "" + txtPotong + "ay");
                }
                else {
                    arrBaru.push(sentence[i]);
                }
            }
        }
        console.log(arrBaru.join(" "));

}

function print(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('please write something text : ');
    rl.prompt();
    rl.on('line',(TextTulisan) => {
        pigLatin(TextTulisan);
    rl.prompt();

    }).on('close', () =>{
        console.log("Bye bye");
        process.exit(0);
    })
}


print();
