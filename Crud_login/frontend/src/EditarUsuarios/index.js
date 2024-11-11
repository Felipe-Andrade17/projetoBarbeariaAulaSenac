import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

import apiLocal from '../Api/apiLocal';

export default function EditarUsuarios() {

    const { id } = useParams();

    const [dadosUsuario, setDadosUsuario] = useState(['']);

    useEffect(() => {

        async function consultarDadosUsuarioUnico() {

            const resposta = await apiLocal.post(`/ConsultarUsuarioUnico/:${id}`)

            setDadosUsuario(resposta.data);

        }

        consultarDadosUsuarioUnico();

    }, [dadosUsuario])

    return (

        <div>

            <h1>Editar Usuários</h1>

            {dadosUsuario.map((item) => {

                return (

                    <div>

                        <p>Nome: {item.nome}</p>
                        <p>E-mail: {item.email}</p>

                        <Link to={`/EditarUsuarios/${item.id}`}>Editar</Link>

                    </div>
                )

            })}

        </div>
    )
}