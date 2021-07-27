import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    // margin: 0 auto; 
    width: 20rem;
    border-radius: 6px;
    background-color: purple;
`
const SectionRedirect = styled.section`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: violet;
`
function SeeMoreScrollBar() {
    return (
        <Section>
            <SectionRedirect>
                <h2>fe</h2>
            </SectionRedirect>
        </Section>
    )
}

export default SeeMoreScrollBar
