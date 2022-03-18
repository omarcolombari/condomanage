import styled from 'styled-components'

export const Main = styled.main`

    h2{
        color: #141155;
        font-size: 48px;
        margin: 0 auto;
        text-align: center;
        width: 550px;
    }
    form {
        display: flex;
        @media screen and (min-width: 710px){
            flex-wrap: wrap;
        }
        flex-direction: column;
        height: 300px;
        width: 60%;
        margin: 0 auto;
        button {
            position: relative;
            width: 250px;
            height: 41px;
            right: 150px;
            top: 30px;
            background: #00A5AE;
            border-radius: 30px;
            color: white;
        }
    }
`