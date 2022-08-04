import { TextField } from "@mui/material"
import { InputHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    labelName: string
    inputType: string
    name: string
    register: any
}

const Input = ({labelName, inputType, name, register, ...rest}: InputProps) =>{
    return(
        <InputContainer>            
            <TextField id="outlined-basic" label="Email" variant="outlined" type={inputType} required {...rest} {...register(name)}/>            
        </InputContainer>         
    )
}

export default Input