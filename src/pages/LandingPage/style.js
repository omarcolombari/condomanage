import { keyframes } from "styled-components";
import styled from "styled-components";
import background1 from "../../assets/background.png"


const ContainerAnimated = keyframes`

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }

`

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #daedf3;
    animation: ${ContainerAnimated} 0.5s;
    
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
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 768px) {
        width: 50%;
        max-width: 600px;
        background-color: #fff;
        align-items: center;
    }

`

export const ContainerLogo = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        max-width: 276px;
        @media (min-width: 768px) {
            max-width: 350px;
        }
    }
`

export const ContainerText = styled.div`
    max-width: 375px;

    @media (min-width: 768px) {
            max-width: 425px;
        }

    p {
        font-size: 18px;
        padding: 15px;

        @media (min-width: 768px) {
            font-size: 1.5rem;
            max-width: 425px;
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
        width: 90%;
        max-width: 355px;
        margin-bottom: 20px;
        height: 45px;
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
        

        @media (min-width: 768px) {
            width: 42%;
            max-width: 215px;
        }
    }

`

