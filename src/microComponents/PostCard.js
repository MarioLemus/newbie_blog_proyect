import React from 'react'
import styled from 'styled-components'
import BlogStatusBar from './BlogStatusBar';

const Section = styled.section`
    background-color: purple;
    max-width: 20rem;
    min-width: 5rem;
    margin: 0 auto;
    >h3 {
        text-align: center;
    }
    >h3, p {
        padding: 12px 12px;
    }
`;

function PostCard({blogTitle, contentsPreview}) {
    return (
        <Section>
            <h3>{blogTitle}</h3>
            <p>{contentsPreview}</p>
            {/* likes, fav, date */}
            <BlogStatusBar />
        </Section>
    )
}

export default PostCard