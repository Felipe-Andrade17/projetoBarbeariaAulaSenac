import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import apiLocal from '../Api/apiLocal';


export default function DashBoard(){

    const [dadosUsuarios, setDadosUsuarios] = useState(['']);

    const iToken = localStorage.getItem('@token');
    const token = JSON.parse(iToken);

    useEffect(() => {

        async function consultarDadosUsuarios(){

            const resposta = await apiLocal.get('/ConsultarUsuarios',{

                headers:{

                    Authorization: `Bearer ${token}`
                }
            });

            setDadosUsuarios(resposta.data);    

        }

        consultarDadosUsuarios();

    }, [dadosUsuarios])

        async function apagarUsuarios(id){

            try{

                await apiLocal.delete(`/ApagarUsuarios/${id}`);
                 alert("Dados Apagados com sucesso!");

            }catch(err){

                alert("Erro ao comunicar com o backend")
            }
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

                   <Link to ={`/EditarUsuarios/${item.id}`}>Editar</Link>

                </div>
            )

        })} 

        </div>
    )
}