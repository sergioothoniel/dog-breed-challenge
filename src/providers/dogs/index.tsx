import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import api from "../../services"
import { useIsLogged } from "../inLogged"

interface DogsProps{
    children: ReactNode
}

interface DogsProviderData{
    dogsList: string[],
    breed: string
    listHandle: (dogBreed: string) => void
}

const DogsContext = createContext<DogsProviderData>({} as DogsProviderData)

export const DogsProvider = ({children}: DogsProps) =>{

    const [breed, setBreed] = useState<string>("chihuahua")
    const [dogsList, setDogsList] = useState<string[]>([])

    const {token} = useIsLogged()

    useEffect(()=>{
        if(token){
            api.get(`list?breed=${breed}`, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                setDogsList(response.data.list)                
            })
            .catch(error => {console.log(error)
            })
        }        

    }, [token, breed])

    const listHandle = (dogBreed: string) =>{
        setDogsList([])
        setBreed(dogBreed)
    }

    return(
        <DogsContext.Provider value={{breed, listHandle, dogsList}}>
            {children}
        </DogsContext.Provider>
    )
}

export const useDogs = () => useContext(DogsContext)