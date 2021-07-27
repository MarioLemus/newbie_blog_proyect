import React from 'react'
import styled from 'styled-components'

const SectionHero = styled.section`
    height: 65vh;
    border: 1px solid grey;
    margin: 0 auto; 
    width: 90%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: hsl(1, 50%, 100%);
`;
const SectionHeroHolder = styled.section`
    width: 100%;
    margin-top: 5rem;
    border: 1px solid red;
    height: 50vh;
`;
const H2Hero = styled.h2`
    font-weight: 900;
`;

function Hero() {
    return (
        <SectionHero>
            <SectionHeroHolder>
                <H2Hero>De Newbie a algo superior! este es el blog que se encarga de tomar en cuenta a todos esos programadores junior que inician en la programacion y que les hace falta experiencia e inspiración.</H2Hero>
            </SectionHeroHolder>
        </SectionHero>
    )
}

export default Hero
