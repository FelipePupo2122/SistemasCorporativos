var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

const db = require('./models');
const { error } = require('console');

//aqui será aplicado as migrations(integrar com o banco de dados)
async function ApplyMigrations(){
    try{
    migration_config={
    create: true,
    alter: true
};

db.sequelize.sync({
    alter: migration_config.alter
});
console.log('Sincronização com o banco realizada');
    }
    catch{error}
    console.log('Erro sincronizando o banco de dados', error);
}

//acionar a sincrinzação com o banco
ApplyMigrations();

var port = '3000';
app.listen(port,function(){
    console.log("Server runing on port"  + port);
    module.exports = app;
});