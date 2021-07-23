import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: violet;
    height: 3rem;
    position: fixed;
    width: 100%;
`; 
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 1.5rem;
`
const SectionLogo = styled.section`
    display: inline-block;
    background-color: beige;
    height: 3rem;
`;
const Nav = styled.nav`
    display: inline-block;
    background-color: beige;
    height: 3rem;
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
`
const Li = styled.li`
    margin: 0 10px;
`
function Navbar() {
    return (
        <Header>
            <Section>
                <SectionLogo>
                    <h2>
                        Newbie Dev
                    </h2>
                </SectionLogo>
                <Nav>
                    <Ul>
                        <Li>New</Li>
                        <Li>Old</Li>
                        <Li>New Proyects</Li>
                    </Ul>
                </Nav>
            </Section>
        </Header>
    )
}

export default Navbar
