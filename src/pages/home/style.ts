import styled from "styled-components";

export const HomeContainer = styled.div`

h1{
    font-size: xxx-large;
}

.cardsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
}

#selected{
    width: 50vw;
    height: auto ;
    box-shadow: 10px 5px 5px black;
    margin: 10px 15px 15px 10px;

    img{
        max-width: 100%;
        max-height: 100%;        
        height: auto;
    }
}

.breedSelector{
    width: 100px;
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

`

