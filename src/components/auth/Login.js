import React, { Fragment } from 'react'
import Footer from '../../microComponents/Footer'
import Navbar from '../../microComponents/Navbar'
import styled from 'styled-components'
import LoginForm from './auth_microcomponents/LoginForm'

const Section = styled.section`
    min-height: calc(100vh - 2rem);
`

function Login() {
    return (
        <Fragment>
            <Navbar />
            <Section>
                <LoginForm />
            </Section>
            <Footer />
        </Fragment>
    )
}

export default Login
