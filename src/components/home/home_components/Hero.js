import React from 'react'
import styled from 'styled-components'

const SectionHero = styled.section`
    height: 65vh;
    margin: 0 auto; 
    width: 90%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: hsl(1, 50%, 100%);
`
const SectionHeroHolder = styled.section`
    width: 100%;
    margin-top: 5rem;
    border: 1px solid red;
    height: 50vh;
    display: flex;
    border-radius: 6px;
`
const SectionImgHolder = styled.section`
    background-image: url( "img/fbc.jpg" );
    background-repeat: no-repeat;
    width: 50%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    
`
const H2Hero = styled.h2`
    font-weight: 900;
`
const SectionHeroTitle = styled.section`
    width: 50%;
    //background-color: red;
`
/*css3 Test Syllabus

Fundamentals
Basic styles
Basic user interface
Color styles
Text and style attribute syntax
Selectors
Page media
Speech and ruby
2d, 3d and animation
Font styles
Miscellaneous */
function Hero() {
    return (
        <SectionHero>
            <SectionHeroHolder>
                <SectionImgHolder />
                <SectionHeroTitle>
                    <H2Hero>De Newbie a algo superior! este es el blog que se encarga de tomar en cuenta a todos esos programadores junior que inician en la programacion y que les hace falta experiencia e inspiración.</H2Hero>
                </SectionHeroTitle>
            </SectionHeroHolder>
        </SectionHero>
    )
}
export default Hero
