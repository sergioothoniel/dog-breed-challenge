import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useIsLogged } from "../../providers/inLogged"
import api from "../../services"
import Button from "../button"
import Input from "../input"
import { FormContainer } from "./style"

const Form = () =>{

    const history = useHistory()

    const {register, handleSubmit} = useForm()

    const {setToken} = useIsLogged()

    const onSubmitFunction = (data: object) =>{
        api.post("register", data)
        .then(response => {            
            const tokenData = {token: response.data.user.token}
            localStorage.setItem("@dogbreed/token", JSON.stringify(tokenData))
            setToken(tokenData.token)
            history.push("/home")
        })
        .catch(error => console.log(error))
    }

    return(
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Dog Breed</h1>
            <Input labelName="Email" inputType="email" register={register} name="email"/>
            <Button buttonType="submit">Register</Button>
        </FormContainer>
    )
}

export default Form