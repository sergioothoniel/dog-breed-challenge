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
`