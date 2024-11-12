import prismaClient from "../../Prisma";
import {hash} from 'bcryptjs'; 

interface cadUsuarios{

    nome: string,
    email: string,
    password: string
}

interface AlterarUsuarios{

    id: string, 
    nome: string,
    email: string

}

class usuariosServices{

    async cadastrarUsuarios({nome, email, password}:cadUsuarios){

        const senhaCriptografada = await hash(password, 8);

        await prismaClient.cadastrarUsuarios.create({

            data:{

                nome: nome,
                email: email,
                password: senhaCriptografada,
            }
        })

        return ({dados: "Cadastro Realizado com Sucesso!"})
    }

    async consultarUsuarios(){

        const resposta = await prismaClient.cadastrarUsuarios.findMany({

            select:{

                id: true,
                nome: true,
                email: true,
                grupos:{

                    select:{

                        nome: true
                    }
                }
            },

        });

        return resposta;
    }


    async consultarUsuarioUnico(id:string){

        const resposta = await prismaClient.cadastrarUsuarios.findUnique({

            where:{

                id: id
            }, 

            select:{

                nome: true,
                email: true,
                password: true
            }
        })

        return resposta 
    }


    async alterarDadosUsuario({id, nome, email}:AlterarUsuarios){

        await prismaClient.cadastrarUsuarios.update({

            where:{

                id: id
            },

            data:{

                nome: nome,
                email: email
            }
        })
        
    }

    async apagarUsuarios(id: string){

        await prismaClient.cadastrarUsuarios.delete({

            where:{

                id:id
            }
        })

        return ({dados: 'Registro Apagado com sucesso!'});
    }
}

export {usuariosServices}