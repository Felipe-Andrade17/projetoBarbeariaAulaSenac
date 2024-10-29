import prismaClient from "../../Prisma"

interface cadUsuarios{

    nome: string,
    email: string,
    password: string
}

class usuariosServices{

    async cadastrarUsuarios({nome, email, password}:cadUsuarios){

        await prismaClient.cadastrarUsuarios.create({

            data:{

                nome: nome,
                email: email,
                password: password
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
}

export {usuariosServices}