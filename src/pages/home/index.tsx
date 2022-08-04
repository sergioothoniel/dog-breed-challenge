import { CircularProgress, ImageList, ImageListItem } from "@mui/material"
import { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import Card from "../../components/card"
import ModalImage from "../../components/modalImage"
import ModalContainer from "../../components/modalImage"
import { useDogs } from "../../providers/dogs"
import { useIsLogged } from "../../providers/inLogged"
import { HomeContainer } from "./style"

const Home  = () =>{

    const history = useHistory()

    const {setToken} = useIsLogged()
    const {listHandle, dogsList} = useDogs()

    const [imageSelected, setImageSelected] = useState<string>('')
    const [buttonSelected, setButtonSelected] = useState<string>("chihuahua")

    useEffect(()=>{
        const token = localStorage.getItem("@dogbreed/token")
        if(!token){
            history.push("/")
        }
        else{
            setToken(JSON.parse(token).token)
        }                     
    })  

    const handleClickButton = (breed: string) =>{
        setButtonSelected(breed)
        listHandle(breed)
    }
    
    const handleClickImage = (imgURL: any) =>{
        setImageSelected(imgURL)                      
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

            
            {dogsList[0] ?
            (<ImageList  variant="masonry"  cols={8} rowHeight={200}>
                {dogsList.map((item, index) => (
                    <ImageListItem key={index}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt=''
                        loading="lazy"
                        onClick={() => handleClickImage(item)}
                    />
                    </ImageListItem>
                ))}
            </ImageList>)
            :
            (
                <div className="loadingIcon"><CircularProgress/></div>
            )
            }

            <ModalImage imgURL={imageSelected}/>

            {/* <div className="cardsList">
                {dogsList[0] ?                 
                dogsList.map((image, index) =>(
                    <Card key={index} imgURL={image} onClick={handleClickImage}/>
                ))
                :
                <div className="loadingIcon"><CircularProgress/></div>
            }
            </div> */}
        </HomeContainer>
    )
}

export default Home