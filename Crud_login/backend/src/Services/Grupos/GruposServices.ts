import prismaClient from "../../Prisma"

interface cadGrupos{

    nome: string
  
}

class gruposServices{

    async cadastrarGrupos({nome}:cadGrupos){

        await prismaClient.cadastrarGrupos.create({

            data:{

                nome: nome        
            }
        })

        return ({dados: "Cadastro Realizado com Sucesso!"})
    }
}

export {gruposServices}