import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
   
   
    @media(min-width: 992px){
        margin-top: 15rem;
    }
    @media(min-width: 668px){
        margin-top: 15rem;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 24px;
        &::before{
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            left : -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;

    }
`

const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    )
}

export default Frase