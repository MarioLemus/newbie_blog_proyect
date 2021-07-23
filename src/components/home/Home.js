import React from 'react'
import Footer from '../../microComponents/Footer';
import Hero from './home_components/Hero';
import LastTenBlogs from './home_components/LastTenBlogs';
import Navbar from '../../microComponents/Navbar'
import PurposePage from './home_components/PurposePage';
import UserMostLikedBlogs from './home_components/UserMostLikedBlogs';

// const Section = styled.section`
//     height: 30vh;
//     padding-top: 3rem;
// `;

function Home() {
    return (
        <div>
            <Navbar />
            <Hero /> 
            <h2>objetivo del proyecto</h2>
            <PurposePage />
            <h2>most liked blogs</h2>
            <UserMostLikedBlogs />
            <h2>last 10 blogs</h2>
            <LastTenBlogs />
            <Footer />
        </div>
    )
}

export default Home
