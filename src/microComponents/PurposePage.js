import React from 'react'
import styled from 'styled-components'

const SectionPurpose = styled.section`
    border: 1px solid grey;
`

function PurposePage({title, content}) {
    return (
        <SectionPurpose>
            <img src="" alt="" />
            <h3>{title}</h3>
            <p>{content}</p>
        </SectionPurpose>
    )
}

export default PurposePage
