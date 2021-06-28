var pdf = require("html-pdf");

class PDFwriter{
    static writePDF(fileName, html){
        pdf.create(html,{}).toFile(fileName, (err) => {
            console.log("Ocorreu um erro ao gerar o pdf: " + err);
        });
    }
}

module.exports = PDFwriter;