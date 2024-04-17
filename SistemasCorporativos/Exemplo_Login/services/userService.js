// ./services/userService/.js
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
    ///localizaTodosUsuario
    async localizaTodosUsuario(login,senha){
        try{
           const AllUsers = await this.User.findAll();
           return AllUsers? AllUsers: null;
        }
        catch(error){
        throw error;
        }
    }

    ///localizaUsuarioPeloLogin
    // async localizaUsuarioPeloId(id){
    //     try{
    //        const LocalizaUser = await this.User.findByPk(id);
    //        return LocalizaUser? LocalizaUser: null;
    //     }
    //     catch(error){
    //     throw error;
    //     }
    // }
    async findOne(id) {
        try {
            const user = await this.User.findByPk(id);
            return user ? user : null;
        } catch (error) {
            throw error;
        }
    }

}


module.exports = userService;