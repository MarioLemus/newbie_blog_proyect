import React, { Fragment } from 'react'
import styled from 'styled-components'
import Footer from '../../microComponents/Footer';
import Navbar from '../../microComponents/Navbar'
import PurposePage from '../../microComponents/PurposePage'
import Project from './projectsPage_components/Project';

const SectionProjects = styled.section`
    padding-top: 3rem;
`
const Section = styled.section`
    width: 90%;
    margin: 0 auto;
    height: 50vh;
    border: 1px solid red;
    display: flex;
    align-items: center;
`
const SectionProjecstHolder = styled.section`
    width: 90%;
    margin: 0 auto;
    padding-bottom: 2rem;
`
const Div = styled.div`
    padding: 5px 0;
`

function ProjectsPage() {

    const purposePageContent = {
        hasTitle:'¿Cual es el objetivo a largo plazo que tiene este blog?',
        hasContent: 'Inspirar y capacitar a los jovenes de latinoamerica para innovar en elsector tecnologico de la region y generar nuevas alternativas monetarias para la realidad que se vive en la region.'
    }

    return (
        <Fragment>
            <Navbar />
            <SectionProjects>
                <Section>
                    <PurposePage title={purposePageContent.hasTitle} content={purposePageContent.hasContent}/>
                </Section>
                <SectionProjecstHolder>
                    <h2>Projects</h2>
                    <Div>
                        <Project title='prueba' description='fututra descripcion' />
                    </Div>
                    <Div>
                        <Project title='prueba' description='fututra descripcion' />
                    </Div>
                    <Div>
                        <Project title='prueba' description='fututra descripcion' />
                    </Div>
                </SectionProjecstHolder>
            </SectionProjects>
            <Footer />
        </Fragment>
    )
}

export default ProjectsPage
