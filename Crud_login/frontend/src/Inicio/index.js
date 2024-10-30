import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './estilo.inicio.scss'

export default function Inicio(){


    const {nome, setNome} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');

    return(

        <div className='conteinerInicioGeral'>

        <h1>Pagina de Inicio</h1>

        <form>
            <input 
            type="text"
            placeholder='Digite o E-mail'
            />

            <input 
            type="password"
            placeholder='Digite a Senha'            
            />

            <button type="Submit">Enviar</button>
        </form>
        <p>Para se cadastrar clique <Link to = '/CadastrarUsuarios'>Aqui</Link></p>
        </div>
    )
}