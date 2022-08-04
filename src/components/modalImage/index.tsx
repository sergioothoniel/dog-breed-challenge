import { HTMLAttributes } from "react"
import { ModalContainer } from "./style"

interface ModalProps extends HTMLAttributes<HTMLElement>{
    imgURL: string,    
}

const ModalImage = ({imgURL}: ModalProps) =>{

    return(
        <ModalContainer>
            <figure>
                <img src={imgURL} alt="" />
            </figure>

        </ModalContainer>
    )
}

export default ModalImage