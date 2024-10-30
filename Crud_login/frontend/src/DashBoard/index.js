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

    }, [])

    return(
        <div>

        <h1>Pagina de DashBoard</h1>

        {dadosUsuarios.map ((item) => {

            return(

                <div>

                    <p>Id: {item.id}</p>
                    <p>Nome: {item.nome}</p>
                    <p>E-mail: {item.email}</p>
                    <button>Apagar item</button>
                    <button>Editar item</button>

                </div>
            )

        })}

        </div>
    )
}