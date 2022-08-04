import { FigureContainer } from "./style"

interface CardProps{
    imgURL: string
}

const Card = ({imgURL}: CardProps) =>{
    return(
        <FigureContainer>
            <img src={imgURL} alt="" />
        </FigureContainer>
    )
}

export default Card