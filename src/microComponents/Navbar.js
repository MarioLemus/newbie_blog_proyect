import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    color: purple;
    height: 3rem;
`;
const DivLogoHolder = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
`;
const H2Logo = styled.h2`
    font-weight: 400;
`;
const Nav = styled.nav`
    display: inline-block;
    height: 3rem;
`
const Ul = styled.ul`
    display: flex;
    list-style: none;
    > a {
        text-decoration: none;
        color: hsl(2, 50%, 100%);
    }
`
const Li = styled.li`
    margin: 0 10px;
`
function Navbar() {
    return (
        <Header>
            <Section>
                <Link to="/">
                    <SectionLogo>
                        <DivLogoHolder>
                            <H2Logo>Newbie Dev</H2Logo>
                        </DivLogoHolder>
                   </SectionLogo>
                </Link>
               
                <Nav>
                    <Ul>
                        <Link to="/Blogs"><Li>Blogs</Li></Link>
                        <Link to="/Projects"><Li>Projects</Li></Link>
                        <Link to="/Login"><Li>Log in</Li></Link>
                    </Ul>
                </Nav>
            </Section>
        </Header>
    )
}

export default Navbar
