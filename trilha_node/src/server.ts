import express from 'express'
import 'reflect-metadata'
import './database'  // './database/index.ts'
import { router } from './routes'

const app = express()

/* 
get -> acessar, post -> salvar/enviar, put -> alterar/colocar, delete -> apagar, patch -> alteração específica
*/

app.use(express.json())

app.use(router)




app.listen(3333, () => console.log('Servidor está rodando!'))







/* app.get('/', (req, resp) => {
    return resp.json({mensagem: 'Olá mundo - NLW4', dia: 1})
})

app.post('/', (req, resp) => {
    // recebeu os dados para salvar
    return resp.json({ mensagem: 'Os dados foram salvos com sucesso!' })
}) */