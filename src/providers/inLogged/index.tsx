import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IsLoggedProps{
    children: ReactNode
}

interface IsLoggedProviderData{    
    token: string,
    setToken: (value: string) => void    
}

const IsLoggedContext = createContext<IsLoggedProviderData>({} as IsLoggedProviderData)

export const IsLoggedProvider = ({children}: IsLoggedProps) =>{
    
    const [token, setToken] = useState<string>("")    

    useEffect(()=>{
        const localStorageJSON = localStorage.getItem("@dogbreed/token")

        if(localStorageJSON){
            const localStorageData = JSON.parse(localStorageJSON)            
            setToken(localStorageData.token)            
        }

    }, [])

    return(
        <IsLoggedContext.Provider value={{ token, setToken}}>
            {children}
        </IsLoggedContext.Provider>
    )          
}

export const useIsLogged = () => useContext(IsLoggedContext)