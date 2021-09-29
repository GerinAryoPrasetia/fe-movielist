import React, { useState, useEffect } from 'react'
import Footer from '../components/footer/Footer'
import GenreCard from '../components/GenreCard'
import GenreCard2 from '../components/GenreCard2'
import Hero from '../components/Hero'
import TopCard from '../components/TopCard'


const Home = () => {

    return (
        <div>
            <Hero />
            <TopCard />
            <GenreCard />
            <GenreCard2 />
            <Footer />
        </div>
    )
}

export default Home
