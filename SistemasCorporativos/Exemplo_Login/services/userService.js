// ./services/userService/.js
const db = require('../models');
class userService{
    // construtor da classe recebe a user model
    constructor(userModel){
        this.User = userModel;
    }
    async create(nome, email, senha){
        try{
            const novoUser = await this.User.create(
                {
                nome:nome,
                email:email,
                senha:senha
                }
            );
            return novoUser ? novoUser : null; // metodo bagual de fazer if else(metodo ternario)
            // if(novoUser){
            //     return novoUser;
            // }else{
            //     return null;
            // }  metodo bugre pra fazer if else
        }

    catch(error){
        throw error;
    }
    }
}