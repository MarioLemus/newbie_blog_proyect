import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    // margin: 0 auto; 
    // widht: 20rem;
    border-radius: 6px;
    background-color: #fff;
    border: 2px solid purple;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const SectionRedirect = styled.section`
    width: 3rem;
    margin: 0 5px;
    height: 3rem;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid violet;
    > p {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
function SeeMoreScrollBar() {
    return (
        <Section>
            <SectionRedirect>
                <p>></p>
            </SectionRedirect>
        </Section>
    )
}

export default SeeMoreScrollBar
