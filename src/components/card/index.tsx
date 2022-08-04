import { HTMLAttributes} from "react"
import { FigureContainer } from "./style"

interface CardProps extends HTMLAttributes<HTMLElement>{
    imgURL: string,
    selected?: boolean
}


const Card = ({imgURL, selected = false, ...rest}: CardProps) =>{
    
    return(
        <FigureContainer>
            <figure>
                <img src={imgURL} alt="" {...rest} />
            </figure>            
        </FigureContainer>
    )
}

export default Card