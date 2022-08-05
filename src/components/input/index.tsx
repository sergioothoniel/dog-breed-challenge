import { TextField } from "@mui/material"
import { HTMLAttributes } from "react"
import { InputContainer } from "./style"

interface InputProps extends HTMLAttributes<HTMLElement>{
    labelName: string
    inputType: string
    name: string
    register: any
}

const Input = ({labelName, inputType, name, register, ...rest}: InputProps) =>{
    return(
        <InputContainer>            
            <TextField id="outlined-basic" label={labelName} variant="outlined" type={inputType} required {...rest} {...register(name)}/>            
        </InputContainer>         
    )
}

export default Input