import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    height: calc(100vh - 2rem);
    display: flex;
    align-items: center;
`

const Section = styled.section`
    background-color: beige;
    width: 20rem;
    margin: 0 auto;
    height: 15rem;

    > h2 {
        padding: 0 10px;
    }
    > input {
        display: block;
        width: 85%;
        margin: 0 auto;
        padding: 8px;
        margin-bottom: 20px;
    }
    > button {
        display: block;
        margin: 0 auto;
        padding: 5px 40px;
    }
` 

function LoginForm() {
    return (
        <Div>
            <Section>
                <h2>Form</h2>
                <input type="text" placeholder="e-mail"/>
                <input type="text" placeholder="password"/>
                <button>send</button>
            </Section>
        </Div>
    )
}

export default LoginForm
