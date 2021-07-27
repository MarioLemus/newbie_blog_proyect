import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from '../../microComponents/Footer';
import Navbar from '../../microComponents/Navbar'
import PostCard from '../../microComponents/PostCard'

const SectionBlogsPage = styled.section`
    min-height: 100vh;
`
const SectionBlogsHolder = styled.section`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: 0 auto;
`
const SectionPostHolder = styled.section`
    padding-bottom: 40px;
    padding-right: 10px;
    padding-left: 10px;
`

function BlogsHolderPage() {

    const exampleData = {
        hasTitle: 'titulo x',
        hasContentsPreview: 'lorem ipsum dolorum porro primo maximo pope'
    }
    //hacer un bucle para asignar la informacion
    return (
        <Fragment>
            <Navbar />
            <SectionBlogsPage>
                <SectionBlogsHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>


                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle}
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                    <SectionPostHolder>
                        <PostCard blogTitle={exampleData.hasTitle} 
                                  contentsPreview={exampleData.hasContentsPreview}/>
                    </SectionPostHolder>
                </SectionBlogsHolder>
            </SectionBlogsPage>
            <Footer />
        </Fragment>
    )
}

export default BlogsHolderPage
