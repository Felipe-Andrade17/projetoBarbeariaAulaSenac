import React, {useState, useEffect} from 'react';

import apiLocal from '../Api/apiLocal';


export default function DashBoard(){

    const [dadosUsuarios, setDadosUsuarios] = useState(['']);

    useEffect(() => {

        async function consultarDadosUsuarios(){

            const resposta = await apiLocal.get('/ConsultarUsuarios');

            setDadosUsuarios(resposta.data);

        }

        consultarDadosUsuarios();

    }, [dadosUsuarios])

        async function apagarUsuarios(id){

            await apiLocal.delete(`/ApagarUsuarios/${id}`);
            alert("Dados Apagados com sucesso!")

        }

    return(
        <div>

        <h1>Pagina de DashBoard</h1>

        {dadosUsuarios.map ((item) => {

            return(

                <div>

                    <p>Id: {item.id}</p>
                    <p>Nome: {item.nome}</p>
                    <p>E-mail: {item.email}</p>
                    <p>
                        {!item.grupos ? "Sem Grupo" : item.grupos.nome}
                    </p>

                    <button type='Submit' onClick={() => apagarUsuarios(item.id)}>Apagar item</button>

                    <button>Editar item</button>

                </div>
            )

        })}

        </div>
    )
}