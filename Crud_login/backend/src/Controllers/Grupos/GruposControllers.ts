import { Request, Response } from "express";
import { gruposServices } from "../../Services/Grupos/GruposServices";

class GruposControllers{

    async cadastrarGrupos(req: Request, res: Response){

        const {nome} = req.body;

        const enviarDadosServices = new gruposServices();
        const resposta = await enviarDadosServices.cadastrarGrupos({

            nome
        })

        return res.json(resposta);
    }
}

export {GruposControllers}