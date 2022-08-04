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
    box-shadow: 10px 5px 5px black;
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
    }
}

`

