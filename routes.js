const express = require('express'); 
const route = express.Router(); 
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Rotas da Home
route.get('/',homeController.paginaInicial); //estes outros parâmetros( homeController.paginaInicial) são chamados de middlewares, por exemplo 
//podemos criar uma função no meio do caminho ou depois de já ter respondido o cliente para realizar alguma tarefa
route.post('/', homeController.enviaForm);

//Rotas de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;