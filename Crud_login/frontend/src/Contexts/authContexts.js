import { createContext, useState } from "react";
import apiLocal from '../Api/apiLocal';

export const AutenticadoContexto =  createContext();    

export default function AuthProvider({children}){

    const [tokenT, setTokenT] = useState(false);
    const [token, setToken] = useState('');

    const autenticado = !!tokenT;

    async function loginEntrada(email,password){

        try {
        
            const resposta = await apiLocal.post('/LoginUsuarios',{

                email,
                password
            });

            localStorage.setItem('@id',JSON.stringify(resposta.data.id));
            localStorage.setItem('@nome',JSON.stringify(resposta.data.nome));
            localStorage.setItem('@token',JSON.stringify(resposta.data.token));

            setTokenT(true)
           

        } catch (err) {
            
            alert(err.response.data.error)

        }

    }

    return(

        <AutenticadoContexto.Provider value={({autenticado, loginEntrada})}>

            {children}

        </AutenticadoContexto.Provider>
    )
}