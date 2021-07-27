import React from 'react'
import styled from 'styled-components'
import PostCard from '../../../microComponents/PostCard'

const SectionLikedBlogs = styled.section`
    display: flex;
    flex-wrap: wrap;
`

function UserMostLikedBlogs() {
    
    const exampleData = {
        hasTitle: 'titulo x',
        hasContentsPreview: 'lorem ipsum dolorum porro primo maximo pope'
    }
    //hacer un bucle para asignar la informacion
    return (
        <SectionLikedBlogs>
            <PostCard blogTitle={exampleData.hasTitle} contentsPreview={exampleData.hasContentsPreview}/>
            <PostCard blogTitle={exampleData.hasTitle} contentsPreview={exampleData.hasContentsPreview}/>
            <PostCard blogTitle={exampleData.hasTitle} contentsPreview={exampleData.hasContentsPreview}/>
        </SectionLikedBlogs>
    )
}

export default UserMostLikedBlogs
