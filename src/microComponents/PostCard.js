import React from 'react'
import styled from 'styled-components'
import PostStatusBar from './PostStatusBar';

const Section = styled.section`
    background-color: #fff;
    width: 17rem;
    margin: 0 auto;
    border-radius: 6px;
    border: 2px solid violet;
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
            <PostStatusBar />
        </Section>
    )
}

export default PostCard
