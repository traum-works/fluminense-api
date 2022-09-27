const express = require('express')
var bodyParser = require('body-parser')
const { jogadores } = require('./repository/fluminense')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/fluminense/jogadores', (req, res) => {
  res.send(jogadores)
})

app.post('/fluminense/jogadores', (req, res) => {
  jogadores.push(req.body)
  res.send(jogadores)
})

//req.parans tras o valor para dentro do array 
app.patch('/fluminense/jogadores/:id', (req, res) => {
  res.send(req.params)
})

app.delete('/fluminense/jogador:id', (req, res) => {
  jogadores.filter(jogadores => )
  res.send(req.params)
})

app.listen(port, (req, res) => {
  console.log('to rodando ' + port)
})
