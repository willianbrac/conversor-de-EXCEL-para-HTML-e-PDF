const fs = require("fs");

//leitura
fs.readFile("./text.txt",{encoding: 'utf-8'}, (err, dados)=>{
    if(err){
        console.log("Ocorreu um erro durante a leitura do arquivo!")
    }else{
        console.log(dados);
    }
});

//escrita
fs.writeFile("./text.txt", "Novo texto do arquivo", (err)=>{
    if(err){
        console.log("Erro durante o salvamento!")
    }
});
