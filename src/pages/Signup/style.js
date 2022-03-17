import { keyframes } from "styled-components";
import styled from "styled-components";
import background1 from "../../assets/background.png"


const ContainerAnimated = keyframes`

    from {
        transform: translateX(-550px);
    }

`

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #daedf3;
    
    @media (min-width: 768px){
        flex: 1;
        background: url(${background1}) no-repeat;
        background-size: cover;
        background-position: center;
        align-items: flex-start;
    }
`

export const ContainerContent = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 3px;
    animation: ${ContainerAnimated} 0.3s ease-out;

    @media (min-width: 768px) {
        width: 50%;
        max-width: 500px;
        background-color: #daedf3;
        align-items: center;
    }

    .cad-page {
        font-size: 25px;
        font-weight: 600;
        margin-top: 20px;
    }

    .required {
        font-size: 12px;
        font-weight: 700;
        color: #005d89;
    }

`

export const ContainerHeader = styled.div`
    width: 100%;
    max-width: 410px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
        color: #005d89;
        font-size: 25px;
        cursor: pointer;
        transition: 0.3s;

        :hover {
            color: #0196c1;
        }
    }

    h1 {
        @media (min-width: 768px){
            font-size: 38px;
        }
    }

`

export const ContainerForm = styled.form`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
    overflow-y: scroll;
    max-height: 650px;

    .error {
        color: firebrick;
        font-size: 12px;
        font-weight: 600;
        margin-left: 20px;
    }

    .container-input {
        display: flex;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        max-width: 345px;
        flex-direction: column;
        margin-bottom: 10px;


        input {
            width: 100%;
            max-width: 345px;
            margin: 0 auto;
            height: 42px;
            border: none;
            border-radius: 30px;
            padding: 20px;
            background-color: #FFF;
        }

        span:nth-child(1) {
            font-size: 17px;
        }
    }
`

export const ContainerButton = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 435px;
        align-items: flex-start;
        
    }

    button {
        width: 65%;
        max-width: 210px;
        margin-bottom: 20px;
        height: 42px;
        background-color: #00A5AE;
        font-size: 24px;
        font-weight: 300;
        border: none;
        border-radius: 30px;
        color: #FFF;
        transition: 0.3s;
        cursor: pointer;

        :hover {
            background-color: #005d89;
        }
    }

`

