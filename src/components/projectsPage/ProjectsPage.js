import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../../microComponents/Navbar'
import PurposePage from '../../microComponents/PurposePage'
import Project from './projectsPage_components/Project';

const SectionProjects = styled.section`
    padding-top: 3rem;
`;

function ProjectsPage() {
    return (
        <Fragment>
            <Navbar />
            <SectionProjects>
                <PurposePage />
                <h2>proyects</h2>
                <Project />
                <Project />
                <Project />
            </SectionProjects>
        </Fragment>
    )
}

export default ProjectsPage
