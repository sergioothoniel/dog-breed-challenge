import styled from "styled-components";

export const FigureContainer = styled.div`
cursor: pointer;

figure{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;    
    margin: 5px 10px 5px 5px;
    transition: 0.3s;
}

img{
    width: 100%;
    max-height: 100%;
}
`