import React from 'react'
import styled from 'styled-components'

const SectionProject = styled.section`
    background-color: cyan;
`;

function Project() {
    return (
        <SectionProject>
            <h2>project</h2>
            <p>future img</p>
            <button>see more</button>
        </SectionProject>
    )
}

export default Project
