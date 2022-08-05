import styled from "styled-components";

export const FormContainer = styled.form`
width: 35vw;
max-width: 400px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
height: 70vh;
padding: 20px 0 30px 0;
border-radius: 20px;
background: #eeeeff;

h1{
    height: 40%;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: xxx-large;
}

@media (max-width: 800px){
    width: 80%;
}

`