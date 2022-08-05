import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 98vw;
margin: auto;

h1{
    font-size: xxx-large;
}

.cardsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
    width: 90%;
}



.breedSelectors{
    width: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button{
        flex-grow: 1;
        flex-shrink: 1;
        height: 30px;
        cursor: pointer;
        background: #c7e0ff;
        border: none;
        font-size: medium;
        margin: 0 3px;
        border-radius: 5px;
        font-family: cursive;

        :disabled{
            background-color: #d9e8ff;
            cursor: auto;
        }

    }
}

.loadMoreBtn{
    width: 100vw;
    margin: 40px;

    button{
        width: 250px;
        height: 30px;
        cursor: pointer;
        background: #c7e0ff;
        border: none;
        font-size: medium;
        margin: 0 3px;
        border-radius: 5px;
        font-family: cursive;

        :disabled{
            background-color: #9e9e9e;
            cursor: auto;
        }
    }    
}

@media (max-width: 800px){
    .breedSelectors{
        width: 90vw;
    }

    .cardsList{
        width: 100%;
    }
}

`

