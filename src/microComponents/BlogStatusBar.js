import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    margin: 0 auto;
    width: 95%;
    > p {
        margin: 14px;
    }
`;

function BlogStatusBar() {
    return (
        <Section>
            <p>likes</p>
            <p>fav</p>
            <p>creation date</p>
        </Section>
    )
}

export default BlogStatusBar