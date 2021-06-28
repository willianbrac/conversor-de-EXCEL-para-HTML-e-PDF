const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async write(fileName, data){
        try {
            return await this.writer(fileName, data);
        } catch (error) {
            return console.log("Ocorreu um erro ao escrever o arquivo" + error);
        }
        
    }

}

module.exports = Writer;