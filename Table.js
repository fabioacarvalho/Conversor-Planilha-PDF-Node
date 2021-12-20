class Table {

    constructor(arr) {
        //Armazenando o Cabeçalho
        this.header = arr[0]
        //Removendo a primeira linha/cabeçalho para armazenar as linhas de dados
        arr.shift()
        this.rows = arr
    }

    get RowCount() {
        return this.rows.length
    }

    get ColumnCount() {
        return this.header.length
    }

}

module.exports = Table