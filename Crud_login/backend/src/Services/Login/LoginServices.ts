import prismaClient from "../../Prisma";
import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken';

interface Login{

    email: string,
    password: string
};

class LoginServices{

    async loginUsuarios({email, password}:Login){

        const usuario = await prismaClient.cadastrarUsuarios.findFirst({

            where:{

                email: email
            }
        });

        if(!usuario){

            throw new Error('Usuário ou senha incorretos!')
        }

        const token = sign({

            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email

        }, 
        
        process.env.JWT_SECRETO,{

            subject: usuario.id,
            expiresIn: '8h'        });

        const senhaCrypt = await compare(password, usuario.password);
       
        if(!senhaCrypt){

            throw new Error('Usuários ou senha incorretos!');
        }

        return{
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
    }
}

export default LoginServices;
