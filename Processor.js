class Processor{
    static Process(data) {
        //Separando em um array pela quebra de linha
        let a = data.split('\r\n')
        let rows = []
        //
        a.forEach(row => {
            let arr = row.split(',')
            rows.push(arr)
        })

        return rows
    }
}

module.exports = Processor