import { HTMLAttributes} from "react"
import { FigureContainer } from "./style"

interface CardProps extends HTMLAttributes<HTMLElement>{
    imgURL: string    
}

const Card = ({imgURL, ...rest}: CardProps) =>{
    
    return(
        <FigureContainer>
            <figure>
                <img src={imgURL} alt="" {...rest} />
            </figure>            
        </FigureContainer>
    )
}

export default Card