const ejs = require("ejs");

class HtmlParser{
     static async Parser(table){
        return await ejs.renderFile("./_table.ejs",{header: table.header, rows: table.rows});
    }
}

module.exports = HtmlParser;