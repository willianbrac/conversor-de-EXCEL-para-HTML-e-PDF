const fs = require("fs");

//leitura

function UsuarioAlterarDados(nome, idade, curso){
    fs.readFile("./User.json",{encoding: 'utf-8'}, (err, dados)=>{
        if(err){
            console.log("Ocorreu um erro durante a leitura do arquivo!")
        }else{
            var conteudo = JSON.parse(dados);        //TEXTO para JSON
            console.log(conteudo);

            conteudo.nome = nome;
            conteudo.idade = idade;
            conteudo.curso = curso;

            fs.writeFile("./User.json", JSON.stringify(conteudo), (err) => {//JSON para TEXTO
                if(err){
                    console.log("Ocorreu um erro ao salvar o arquivo!");
                }else{
                    console.log(conteudo);
                }
            }); 
        }
    });
}

UsuarioAlterarDados("Willian", 22, "REACT")
