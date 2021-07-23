import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: purple;
    width: 80%;
    margin: 0 auto;
`;

function BlogPost() {
    return (
        <Section>
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur modi voluptatem magni temporibus deleniti porro numquam distinctio mollitia facilis ex!</p>
        </Section>
    )
}

export default BlogPost
