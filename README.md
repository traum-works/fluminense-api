# fluminense-api
Fluminense API  Team 2022

## TO-DO:
1. Modelar objeto que sera a representacao do time atual do fluminense: tecnico, jogadores, titulos
    - jogador deve ter nome e idade
    - titulos deve ter nome e ano de conquista
    - tecnico deve ter nome e idade
2. Desenvolver um endpoint de criacao de jogadores
3. Desenvolver um endpoint de listagem de jogadores
4. Desenvolver um endpoint de exclusao de jogadores
5. Desenvolver um endpoint de atualizacao de jogadores

```
const express = require('express')
var bodyParser = require('body-parser')
const fluminense = require('./repository/fluminense')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/fluminense/jogadores', (req, res) => {
  res.send(carros)
})

app.post('/fluminense/jogadores', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log('to rodando ' + port)
})
```
