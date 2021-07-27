import React from 'react'
import styled from 'styled-components'
import Footer from '../../microComponents/Footer';
import Hero from './home_components/Hero';
import LastTenBlogs from './home_components/LastTenBlogs';
import Navbar from '../../microComponents/Navbar'
import PurposePage from '../../microComponents/PurposePage';
import UserMostLikedBlogs from './home_components/UserMostLikedBlogs';

const Section = styled.section`
    width: 90%;
    margin: 0 auto;
    > h2 {
        color: purple;
    }
`

function Home() {

    const purposePageContent = {
        hasTitle:'¿Cual es el objetivo a largo plazo que tiene este blog?',
        hasContent: 'Inspirar y capacitar a los jovenes de latinoamerica para innovar en elsector tecnologico de la region y generar nuevas alternativas monetarias para la realidad que se vive en la region.'
    }

    return (
        <div>
            <Navbar />
            <Hero /> 
            <Section>
                <h2>Objetivo del proyecto</h2>
                <PurposePage title={purposePageContent.hasTitle}
                             content={purposePageContent.hasContent}/>
            </Section>
            <Section>
                <h2>Most liked blogs</h2>
                <UserMostLikedBlogs />
            </Section>
            <Section>
                <h2>Last 10 blogs</h2>
                <LastTenBlogs />
            </Section>
            <Footer />
        </div>
    )
}

export default Home
