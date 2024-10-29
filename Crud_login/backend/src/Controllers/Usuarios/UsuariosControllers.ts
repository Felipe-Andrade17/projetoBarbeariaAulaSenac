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
}

export {UsuariosControllers}