import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../../microComponents/Navbar'
import BlogPost from './Blog_components/BlogPost'

const SectionBlogsPage = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
`;

function BlogsHolderPage() {
    return (
        <Fragment>
            <Navbar />
            <SectionBlogsPage>
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
            </SectionBlogsPage>
        </Fragment>
    )
}

export default BlogsHolderPage
