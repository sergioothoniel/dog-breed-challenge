import { ButtonHTMLAttributes, useEffect, useState } from "react"
import { ButtonContainer } from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    buttonType?: string   
}

const Button = ({buttonType = undefined, children, ...rest}: ButtonProps) =>{

    const [type, setType] = useState<any>('button')    

    useEffect(()=>{
        if(buttonType){
            setType(buttonType)
        }
    },[])


    return(
        <ButtonContainer type={type} {...rest}>
            {children}
        </ButtonContainer>
    )
}

export default Button