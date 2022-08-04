import { CircularProgress } from "@mui/material"
import { useEffect} from "react"
import { useHistory } from "react-router-dom"
import Card from "../../components/card"
import { useDogs } from "../../providers/dogs"
import { useIsLogged } from "../../providers/inLogged"
import { HomeContainer } from "./style"

const Home  = () =>{

    const history = useHistory()

    const {setToken} = useIsLogged()
    const {breed, listHandle, dogsList} = useDogs()

    useEffect(()=>{
        const token = localStorage.getItem("@dogbreed/token")
        if(!token){
            history.push("/")
        }
        else{
            setToken(JSON.parse(token).token)
        }                
        
    })  
    
    return(
        <HomeContainer>
            <h1>Select a Breed</h1>

            <div className="breedSelectors">
                <button onClick={() => listHandle("chihuahua")}>Chihuahua</button>
                <button onClick={() => listHandle("husky")}>Husky</button>
                <button onClick={() => listHandle("labrador")}>Labrador</button>
                <button onClick={() => listHandle("pug")}>Pug</button>
            </div>

            <div className="cardsList">
                {dogsList[0] ?                 
                dogsList.map((image, index) =>(
                    <Card key={index} imgURL={image}/>
                ))
                :
                <div className="loadingIcon"><CircularProgress /></div>
            }
            </div>
        </HomeContainer>
    )
}

export default Home