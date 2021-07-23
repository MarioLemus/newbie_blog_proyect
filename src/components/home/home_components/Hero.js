import React from 'react'
import styled from 'styled-components'

const SectionHero = styled.section`
    height: 40vh;
    background-color: purple;
    padding-top: 3rem;
`;

function Hero() {
    return (
        <SectionHero>
            <p>hero</p>
        </SectionHero>
    )
}

export default Hero
