import React, {useContext, useState} from 'react';
import { AutenticadoContexto } from '../Contexts/authContexts';
import { Link } from 'react-router-dom';

import './estilo.inicio.scss'

export default function Inicio(){

    const {loginEntrada} = useContext(AutenticadoContexto);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function dadosLogin(e){

        e.preventDefault();

        if(!email || !password){

            alert('Preencha todos os campos!');
            return 
        }

        try {
            
            await loginEntrada(email, password);

        } catch (err) {
            
            

        }
    }

    return(

        <div className='conteinerInicioGeral'>

        <h1>Pagina de Inicio</h1>

        <form onSubmit={dadosLogin}>

            <input 
            type="text"
            placeholder='Digite o E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="password"
            placeholder='Digite a Senha'   
            value={password}   
            onChange={(e) => setPassword(e.target.value)}      
            />

            <button type="Submit">Enviar</button>
        </form>
        <p>Para se cadastrar clique <Link to = '/CadastrarUsuarios'>Aqui</Link></p>
        </div>
    )
}