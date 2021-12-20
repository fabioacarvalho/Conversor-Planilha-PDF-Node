let Reader = require('./Reader')
let Writer = require('./Writer')
let PdfWrite = require('./PdfWriter')
let Proecessor = require('./Processor')
let Table = require('./Table')
let HtmlParser = require('./HtmlParser')

let leitor = new Reader()
let escritor = new Writer()

async function main() {
    let dados = await leitor.read('./planilhanode.csv')

    let dadosProcessados = Proecessor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    let html = await HtmlParser.Parse(usuarios)

    escritor.Write(Date.now() + '.html', html)
    PdfWrite.WritePDF(Date.now() + '.pdf', html)

}

main()