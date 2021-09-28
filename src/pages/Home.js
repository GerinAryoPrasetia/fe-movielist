import React, { useState, useEffect } from 'react'
import Footer from '../components/footer/Footer'
import GenreCard from '../components/GenreCard'
import GenreCard2 from '../components/GenreCard2'
import Hero from '../components/Hero'
import TopCard from '../components/TopCard'

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&page=1"
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(FEATURED_API)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            });
    }, [])

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
