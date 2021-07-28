import React from 'react'
import styled from 'styled-components'

const FooterMain = styled.footer`
    background-color: violet;
    color: purple;
    height: 2rem;
    display: flex;
    align-items: center;
    > p {
        margin-left: 2rem;
    }
`

function Footer() {
    return (
        <FooterMain>
            <p>Copyright disclaimer 2021</p>
        </FooterMain>
    )
}

export default Footer
