import React from 'react'
import styled from 'styled-components'
import BlogPost from '../../blogView/Blog_components/BlogPost'

const SectionLikedBlogs = styled.section`
    height: 20vh;
    display: flex;
    width: 80%;
    margin: 0 auto;
`

function UserMostLikedBlogs() {
    return (
        <SectionLikedBlogs>
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </SectionLikedBlogs>
    )
}

export default UserMostLikedBlogs
