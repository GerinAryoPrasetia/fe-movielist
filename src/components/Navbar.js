import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../img/logo.png'
import { useHistory } from 'react-router'
import WatchList from '../pages/WatchList'
import MovieSearch from '../pages/MovieSearch'

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3aa675d6d217d61cd95e39d676f3f4cc&language=en-US&query=${searchTerm}&page=1&include_adult=false"

const Navbar = () => {
    const history = useHistory();
    // const goMovieSearch = () => {
    //     history.replace('/search');

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);


    const handleOnSumbit = async (e) => {
        e.preventDefault();

        setSearchTerm('');
        history.push('/search/' + searchTerm);
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <header>
                <img src={logo} alt="" className="logo" />
                <ul className="nav-links">
                    <li><a href='/'>ALL MOVIES</a></li>
                    <li><a href="/genre">GENRES</a></li>
                    <li><a href="/top-movies">TOP MOVIES</a></li>
                    <li><a href="/watch-list">MY WATCH LIST</a></li>
                </ul>
                <div className="search-box">
                    <form onSubmit={handleOnSumbit}>
                        <button className="btn-search" type='button'><AiOutlineSearch /></button>
                        <input
                            type="text"
                            className="input-search"
                            placeholder="Search Movies..."
                            value={searchTerm}
                            onChange={handleOnChange} />
                    </form>
                </div>
            </header>

        </div>
    )
}

export default Navbar
