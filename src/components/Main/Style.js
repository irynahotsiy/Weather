import styled from 'styled-components';


export const Loading = styled.div `
    color: white;
    text-align: center;
    margin-top: 200px;
`

export const Allowed = styled.div `
    text-align: center;
    margin-top: 200px;
    color: white;
    font-size: 1.3rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-weight: 500;
    @media(max-width: 700px) {
        margin-top: 0px;
    }
`

export const Header = styled.header `
    text-align: center;
    font-size: 4rem;
    color: #ffffff;
    margin: 0 10px;
    @media(max-width: 700px) {
        font-size: 3rem;
    }
`
export const Err = styled.div `
    text-align: center;
    margin-top: 200px;
    color: white;
   p {
    
    font-size: 1.3rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-weight: 500;
   }
`

export const Details = styled.div `
    text-align:center;
    font-size: 1.3rem;
    font-family: serif;
    color: #d9f3ef;
    p {
        text-transform: capitalize;
    }
    footer{
        font-size: 1.1rem;
        position: absolute;
        bottom: 20px;
        right: 0;
        left: 0;
    }
    a{
        color:hsl(150, 82%, 51%);
        text-decoration: none;
    }

`
export const Temp = styled.div `
    font-size: 1.5rem;

    span:first-child {
        color: #fcfcfc;
    }

    span:last-child {
        cursor: pointer;
        color: hsl(150, 82%, 51%);
    }
`
export const Image = styled.div `
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: clouds;
    img {
        width: 80px;
    }

    @keyframes clouds {
    0% {
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5)
        }
    50% {
        -webkit-transform: scale(1.0, 1.0);
        transform: scale(1.0, 1.0);
    }
    100% {
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
    }
}

`

/******* Loading ***********/
export const Container = styled.div `
    width: 200px;
    height: 100px;
    padding-top: 0px;
    margin: 0 auto;
`
export const Ball = styled.div `
    width: 10px;
    height: 10px;
    margin: 10px auto;
    border-radius: 50px;
    
    &:nth-child(1) {
        background: #ffffff;
        -webkit-animation: right 1s infinite ease-in-out;
        -moz-animation: right 1s infinite ease-in-out;
        animation: right 1s infinite ease-in-out;
    }

    &:nth-child(2) {
        background: #ffffff;
        -webkit-animation: left 1.1s infinite ease-in-out;
        -moz-animation: left 1.1s infinite ease-in-out;
        animation: left 1.1s infinite ease-in-out;
    }

    &:nth-child(3) {
        background: #ffffff;
        -webkit-animation: right 1.05s infinite ease-in-out;
        -moz-animation: right 1.05s infinite ease-in-out;
        animation: right 1.05s infinite ease-in-out;
    }

    &:nth-child(4) {
        background: #ffffff;
        -webkit-animation: left 1.15s infinite ease-in-out;
        -moz-animation: left 1.15s infinite ease-in-out;
        animation: left 1.15s infinite ease-in-out;
    }

    &:nth-child(5) {
        background: #ffffff;
        -webkit-animation: right 1.1s infinite ease-in-out;
        -moz-animation: right 1.1s infinite ease-in-out;
        animation: right 1.1s infinite ease-in-out;
    }

    &:nth-child(6) {
        background: #ffffff;
        -webkit-animation: left 1.05s infinite ease-in-out;
        -moz-animation: left 1.05s infinite ease-in-out;
        animation: left 1.05s infinite ease-in-out;
    }

    &:nth-child(7) {
        background: #ffffff;
        -webkit-animation: right 1s infinite ease-in-out;
        -moz-animation: right 1s infinite ease-in-out;
        animation: right 1s infinite ease-in-out;
    }
    &:nth-child(8) {
        background: #ffffff;
        -webkit-animation: left 1.05s infinite ease-in-out;
        -moz-animation: left 1.05s infinite ease-in-out;
        animation: left 1.05s infinite ease-in-out;
    }

    &:nth-child(9) {
        background: #ffffff;
        -webkit-animation: right 1s infinite ease-in-out;
        -moz-animation: right 1s infinite ease-in-out;
        animation: right 1s infinite ease-in-out;
    }
    @-webkit-keyframes right {
        0% {
            -webkit-transform: translate(-15px);
        }
        50% {
            -webkit-transform: translate(15px);
        }
        100% {
            -webkit-transform: translate(-15px);
        }
    }

    @-webkit-keyframes left {
        0% {
            -webkit-transform: translate(15px);
        }
        50% {
            -webkit-transform: translate(-15px);
        }
        100% {
            -webkit-transform: translate(15px);
        }
    }

    @-moz-keyframes right {
        0% {
            -moz-transform: translate(-15px);
        }
        50% {
            -moz-transform: translate(15px);
        }
        100% {
            -moz-transform: translate(-15px);
        }
    }

    @-moz-keyframes left {
        0% {
            -moz-transform: translate(15px);
        }
        50% {
            -moz-transform: translate(-15px);
        }
        100% {
            -moz-transform: translate(15px);
        }
    }

    @keyframes right {
        0% {
            transform: translate(-15px);
        }
        50% {
            transform: translate(15px);
        }
        100% {
            transform: translate(-15px);
        }
    }

    @keyframes left {
        0% {
            transform: translate(15px);
        }
        50% {
            transform: translate(-15px);
        }
        100% {
            transform: translate(15px);
        }
    }
    
    `
  




    













