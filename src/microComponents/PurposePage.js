import React from 'react'
import styled from 'styled-components'

const SectionPurpose = styled.section`
    border: 1px solid red;
    border-radius: 3px;
    line-height: 34px;
    background-color: #fff;
`

function PurposePage({title, content, imgPath}) {
    return (
        <SectionPurpose>
            <img src={imgPath} alt="" />
            <h3>{title}</h3>
            <p>{content}</p>
        </SectionPurpose>
    )
}

export default PurposePage
