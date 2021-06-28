class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length
    }

    get ColumnCount(){
        return this.header.length;
    }
}
module.exports = Table;


// get: transforma o método em um atributo, sempre retorna alguma coisa