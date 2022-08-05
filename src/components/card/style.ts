import styled from "styled-components";

export const FigureContainer = styled.div`
cursor: pointer;

figure{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin: 5px;
    transition: 0.5s;
}

img{
    width: 100%;
    height: 100%;
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

@media (max-width: 430px){
    figure{
        width: 45vw;
    }

    #selected{
        width: 90vw;
    }
}
`