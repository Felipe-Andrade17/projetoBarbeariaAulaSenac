import { createContext, useState } from "react";

export const AutenticadoContexto =  createContext();    

export default function AuthProvider({children}){

    const [tokenT, setTokenT] = useState(true);
    const [token, setToken] = useState('');

    const autenticado = !!tokenT;

    return(

        <AutenticadoContexto.Provider value={({autenticado})}>

            {children}

        </AutenticadoContexto.Provider>
    )
}