import React from 'react'
import Action from '../components/genre/Action'
import Navbar2 from '../components/Navbar2'
import styles from '../components/css/GenreList.module.css'

const GenreLists = () => {

    return (
        <div style={{ backgroundColor: '#fff', height: '100%' }} >
            <Navbar2 />
            <div className={styles.genreList}>
                <div className={styles.card}>
                    <p>Action</p>
                    <a href='/action'>Action</a>
                </div>
                <div className={styles.card}>
                    <p>Comedy</p>
                    <a href='/comedy'>Comedy</a>
                </div>
                <div className={styles.card}>
                    <p>Horror</p>
                    <a href='/horror'>Horror</a>
                </div>
                <div className={styles.card}>
                    <p>Drama</p>
                    <a href='/drama'>Drama</a>
                </div>
            </div>
        </div>
    )
}

export default GenreLists
