import { Request, Response } from "express";
import { usuariosServices } from "../../Services/Usuarios/UsuariosServices";

class UsuariosControllers{

    async cadastrarUsuarios(req: Request, res: Response){

        const {nome, email, password} = req.body;

        const enviarDadosServices = new usuariosServices();
        const resposta = await enviarDadosServices.cadastrarUsuarios({

            nome,
            email,
            password
        })

        return res.json(resposta);
    }

    async consultarUsuarios(req: Request, res: Response){

        const buscarDados = new usuariosServices();
        const resposta = await buscarDados.consultarUsuarios();

        return res.json(resposta);

    }

    async consultarUsuarioUnico(req: Request, res: Response){

        const {id} = req.body;
        const buscarDados = new usuariosServices();
        const resposta = await buscarDados.consultarUsuarioUnico(id);

        return res.json(resposta);
    }


    async apagarUsuarios(req: Request, res: Response){

        const {id} = req.params;
        const deletarUsuarios = new usuariosServices();

        const resposta = await deletarUsuarios.apagarUsuarios(id);

        return res.json(resposta);
        
    }


}

export {UsuariosControllers}