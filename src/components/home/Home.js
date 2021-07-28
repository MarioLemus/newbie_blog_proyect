import React from 'react'
import styled from 'styled-components'
import Footer from '../../microComponents/Footer';
import Hero from './home_components/Hero';
import LastTenBlogs from './home_components/LastTenBlogs';
import Navbar from '../../microComponents/Navbar'
import UserMostLikedBlogs from './home_components/UserMostLikedBlogs';

const Section = styled.section`
    width: 90%;
    margin: 0 auto;
    > h2 {
        color: purple;
        padding-top: 25px;
    }
`
const SectionBlogsHolder = styled.section`
    background-color: hsl(1, 20%, 98%);
`
const SectionPurposesHolder = styled.section`
    background-color: #211522;
    //height: 80vh;
`

function Home() {

    return (
        <div>
            <Navbar />
            <SectionPurposesHolder>
                <Hero /> 
                {/* <Section>
                    <h2>Objetivo del proyecto</h2>
                    <PurposePage title={purposePageContent.hasTitle}
                                content={purposePageContent.hasContent}/>
                </Section> */}
            </SectionPurposesHolder>
            <SectionBlogsHolder>
                <Section>
                    <h2>Most liked blogs</h2>
                    <UserMostLikedBlogs />
                </Section>
                <Section>
                    <h2>Last 10 blogs</h2>
                    <LastTenBlogs />
                </Section>
            </SectionBlogsHolder>
            <Footer />
        </div>
    )
}

export default Home
