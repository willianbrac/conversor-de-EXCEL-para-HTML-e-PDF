var Reader      = require("./Reader");
var Processor   = require("./Processor");
var Table       = require("./Table");
var HtmlParser  = require("./HTMLparser");
var Writer      = require("./Writer");
var PDFwriter   = require("./PDFwriter");
var leitor      = new Reader();
var escritor    = new Writer();

async function main(){
    var data         = await leitor.Read("./_Planilha.csv");
    var dataProcesed = Processor.Process(data);
    var usuarios     = new Table(dataProcesed);

    //adicionando uma nova linha
    //usuarios.rows.push(["André", 28, "Fonoaldiologia"]);
    
    //console.log(usuarios.RowCount);
    //console.log(usuarios.ColumnCount);

    var html = await HtmlParser.Parser(usuarios);

    escritor.writer(Date.now() + ".html", html);   
    PDFwriter.writePDF(Date.now() + ".pdf", html);
}

main();





// panilha csv: colunas separados por vírgula
// as linhas são por meio da quebra de linhas
// campos virtuais: métodos da classe que retornam dados - É bom para retornar campos dinâmicos
//await leitor.Read("./Planilha.csv"): aguardar o retorno dos dados