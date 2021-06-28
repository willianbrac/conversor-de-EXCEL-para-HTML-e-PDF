const fs = require("fs");
const util = require("util");

class Reader{

    constructor(reader){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filePath){
        try {
            return await this.reader(filePath, "utf8");
        } catch (error) {
            return "Erro na leitura do arquivo " + error
        }
        
    }
    
}

module.exports = Reader;



//promiseFy: transforma uma função de calback em uma promise. Biblioteca util
//modelo antigo sem promiseFy

/* Read(caminho){   
    fs.readFile(caminho, "utf8", (erro, dados)=>{
        if (erro) {
            console.log("Erro na leitura do arquivo: " + erro);
        } else {
            console.log(dados);
        }
    })
} */


//Read: recebe o caminho do arquivo a ser lido

// return await this.reader: espera ler o arquivo e depois retorna os dados