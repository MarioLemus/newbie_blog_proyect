import React from 'react'
import BlogPost from '../../blogView/Blog_components/BlogPost'
import styled from 'styled-components'

const SectionLastBlogs = styled.section`
    display: flex;
`

function LastTenBlogs() {
    return (
        <SectionLastBlogs>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />

            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </SectionLastBlogs>
    )
}

export default LastTenBlogs
