import { ReactNode } from "react"
import { DogsProvider } from "./dogs"
import { IsLoggedProvider } from "./inLogged"

interface ProvidersProps {
    children: ReactNode
}

const Provider = ({children}: ProvidersProps) =>{
    return(
        <IsLoggedProvider>
            <DogsProvider>
                {children}
            </DogsProvider>            
        </IsLoggedProvider>

    )
}

export default Provider