import React from 'react'
import Navbar from './Navbar'
import './Hero.css'

const Hero = () => {
    return (
        <div className="background">
            <Navbar />
            <div className="title">
                <h1>THE MEG</h1>
                <button className="title-btn">See Details</button>
            </div>
            <div></div>
        </div>
    )
}

export default Hero
