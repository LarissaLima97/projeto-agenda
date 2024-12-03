const mongoose = require('mongoose');

//Modelagem dos dados
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true}, 
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema); //Primeiro o nome do model e segundo o schema dele
//HomeModel é o responsável por criar, validar e buscar dados

class Home {

}

module.exports = Home; 