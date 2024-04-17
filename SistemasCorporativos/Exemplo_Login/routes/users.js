// routes/users.js
var express = require('express');
var router = express.Router();

  const db=require('../models');
  const userService = require('../services/userService');//CLASSE
  const UserService = new userService(db.User);//Contruçõa objeto

  const userController = require('../controllers/userController'); // classe
  const UserController = new userController(UserService);//Construção do objeto


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Modulo de usuarios está rodando.');
});

//rota para criar um novo usuario
router.post('/novoUsuario', function(req, res, next){
  UserController.create(req, res);
});
// rota localiza todos usuarios
router.get('/localizaTodosUsuario' , function(req, res, next){
  UserController.localizaTodosUsuario(req, res);
});
// localiza um usuario especifico
// router.get('/localizaUsuarioPeloId' , function(req, res, next){
//   UserController.localizaUsuarioPeloId(req, res);
// });
router.get('/:id', function(req, res, next) {
  UserController.findOne(req, res);
});


module.exports = router;
