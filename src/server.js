//importar dependência
const express = require('express'); //variável express recebe uma função, então se torna uma função
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express()
//utilizar body do req
server.use(express.urlencoded({ extended: true }))
//utilizando os arquivos estáticos
server.use(express.static('public'))

//configurar template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(5500)