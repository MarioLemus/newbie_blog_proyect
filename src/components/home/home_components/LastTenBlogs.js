import React from 'react'
import PostCard from '../../../microComponents/PostCard'
import styled from 'styled-components'
import SeeMoreScrollBar from '../../../microComponents/SeeMoreScrollBar'

const SectionLastBlogs = styled.section`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding-bottom: 40px;
    width: 100%;

    &::-webkit-scrollbar {
        display:  none;
    }
`
const SectionPostHolder = styled.section`
    padding-right: 20px;
`

function LastTenBlogs() {

    const exampleData = {
        hasTitle: 'titulo x',
        hasContentsPreview: 'lorem ipsum dolorum porro primo maximo pope'
    }
    //hacer un bucle para asignar la informacion
    return (
        <SectionLastBlogs>
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
            <SeeMoreScrollBar />
        </SectionLastBlogs>
    )
}

export default LastTenBlogs
