import styled from "styled-components";

export const HomeContainer = styled.div`

padding: 0 10px;

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
    height: 100vh ;
    box-shadow: 10px 5px 5px black;
    position: relative;
    z-index: 10;
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

.loadingIcon{
    margin-top: 60px;
}

`

