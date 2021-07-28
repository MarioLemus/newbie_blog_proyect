import React from 'react'
import styled from 'styled-components'

const SectionHero = styled.section`
    margin: 0 auto; 
    width: 90%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    
`
const Section = styled.section`
    background-color: #211522;
`
const SectionTitle = styled.section`
    margin-top: 3rem;
    text-align: center;
    font-size: 25px;
    width: 100%;
    color: purple;
`
const Figure = styled.figure`
    background-color: #211522;
    width: 50%;
    margin: 0 auto;
    //background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ImgJs = styled.img`
    width: 80px;
    heigth: 80px;
    object-fit: contain;
`
const ImgReact = styled.img`
    width: 150px;
    heigth: 150px;
    object-fit: contain; 
`
const ImgPython = styled.img`
    width: 80px;
    heigth: 80px;
    object-fit: contain; 
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
       <Section>
            <SectionHero>
                <SectionTitle>
                    <h2>De novato a profesional, sin miedo al exito y a darle vida a la curiosidad.</h2>
                </SectionTitle>
            </SectionHero>
            <Figure>
                <ImgJs src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
                <ImgReact src="img/react_logo.png" alt="" />
                <ImgPython src="img/python_logo.png" alt="" />
            </Figure>
       </Section>
    )
}
export default Hero
