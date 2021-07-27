import React from 'react'
import styled from 'styled-components'

const SectionProject = styled.section`
    //background-color: cyan;
    border: 1px solid grey;
    
`;

function Project({title, description, img}) {
    return (
        <SectionProject>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src="" alt="" />
            <button>see more</button>
        </SectionProject>
    )
}

export default Project
