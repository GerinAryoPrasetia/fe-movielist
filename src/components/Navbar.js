import React from 'react'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div>
            <header>

                <img src={logo} alt="" className="logo" />

                <ul className="nav-links">
                    <li><a href="#">ALL MOVIES</a></li>
                    <li><a href="#">GENRES</a></li>
                    <li><a href="#">TOP MOVIES</a></li>
                    <li><a href="#">MY WATCH LIST</a></li>
                </ul>
                <div class="search-box">
                    <button class="btn-search"><AiOutlineSearch /></button>
                    <input type="text" class="input-search" placeholder="Search Movies..." />
                </div>
            </header>
        </div>
    )
}

export default Navbar
