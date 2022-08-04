import { CircularProgress } from "@mui/material"
import { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import Card from "../../components/card"
import { useDogs } from "../../providers/dogs"
import { useIsLogged } from "../../providers/inLogged"
import { HomeContainer } from "./style"

const Home  = () =>{

    const history = useHistory()

    const {setToken} = useIsLogged()
    const {listHandle, dogsList} = useDogs()

    const [quntityImages, setQuantityImages] = useState<number>(60)
    const [dogsListToRender, setDogsListToRender] = useState<string[]>([] as string[])
    const [imageSelected, setImageSelected] = useState<HTMLElement>()
    const [buttonSelected, setButtonSelected] = useState<string>("chihuahua")

    useEffect(()=>{
        const token = localStorage.getItem("@dogbreed/token")
        if(!token){
            history.push("/")
        }
        else{
            setToken(JSON.parse(token).token)
        }                     
    }, [])  

    useEffect(()=>{

        if(dogsList[0]){
            const dogsListLength = dogsList.length
            setDogsListToRender(dogsList.slice(0, quntityImages || dogsListLength))
        }       
                       
    }, [dogsList, quntityImages])

    const handleClickButton = (breed: string) =>{
        setQuantityImages(60)
        setDogsListToRender([])
        setButtonSelected(breed)
        listHandle(breed)
    }
    
    const handleClickImage = (event: any) =>{
        if(imageSelected){
            imageSelected!.id = ''
        }  

        const elementTarget = event.target.parentElement
        console.log(elementTarget)

        if(imageSelected !== elementTarget){
            elementTarget.id = "selected"
            setImageSelected(elementTarget)
        }
        else{
            setImageSelected(undefined)
        }                  
    }
   
    return(
        <HomeContainer>
            <h1>Select a Breed</h1>

            <div className="breedSelectors">
                <button className="breedSelector" disabled={buttonSelected === "chihuahua" ? true : false} onClick={() => handleClickButton("chihuahua")}>Chihuahua</button>
                <button className="breedSelector" disabled={buttonSelected === "husky" ? true : false}  onClick={() => handleClickButton("husky")}>Husky</button>
                <button className="breedSelector" disabled={buttonSelected === "labrador" ? true : false} onClick={() => handleClickButton("labrador")}>Labrador</button>
                <button className="breedSelector" disabled={buttonSelected === "pug" ? true : false} onClick={() => handleClickButton("pug")}>Pug</button>
            </div>

            <div className="cardsList">
                {dogsListToRender[0] ?                 
                dogsListToRender.map((image, index) =>(
                    <Card key={index} imgURL={image} onClick={handleClickImage}/>
                ))                
                :
                <div className="loadingIcon"><CircularProgress/></div>
            }
            {dogsListToRender[0] && <p className="loadMoreBtn"><button disabled={quntityImages >= dogsList.length ? true : false} onClick={() => setQuantityImages(quntityImages+60)} >Load More Images</button></p>}
            </div>
        </HomeContainer>
    )
}

export default Home