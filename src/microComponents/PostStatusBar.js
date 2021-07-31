import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    margin: 0 auto;
    height: 2.5rem;
    justify-content: space-between;
    /* background-color: red; */
    width: 95%;
    border-top: 1px solid grey;
    align-items: center;
    > p {
        margin: 14px;
    }
`
const Img = styled.img`
    width: 20px;
    object-fit: contain;
`
const Div =  styled.div`
    //background-color: saddlebrown;
    width: 25%;
    display: inherit;
    justify-content: center;
`
const DivTime =  styled.div`
    //background-color: blueviolet;
    width: 100%;
    display: inherit;
    justify-content: center;
`

function PostStatusBar() {
    return (
        <Section>
            <Div>
                <Img src="img/icons/like.svg" alt="" />
            </Div>
  
            <Div>
                <Img src="img/icons/bookmark.svg"  alt="" />
            </Div>
           
            <DivTime>
                <small>22 hours ago</small>
            </DivTime>
        </Section>
    )
}

export default PostStatusBar
