import styled from 'styled-components'

export const Main = styled.main`

    h2{
        color: #141155;
        font-size: 48px;
        margin: 0 auto;
        text-align: center;
        max-width: 550px;
    }
    form {
        display: flex;
        button {
            width: 250px;
            height: 41px;
            background: #00A5AE;
            border-radius: 30px;
            color: white;
            margin-top: 20px;
        }
        @media screen and (min-width: 650px){
            flex-wrap: wrap;
            button {
            position: relative;
            right: 150px;
            top: 30px;
            margin-top: 0;
        }
        }
        flex-direction: column;
        align-items: center;
        height: 300px;
    }
`