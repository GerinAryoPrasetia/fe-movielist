import React from 'react'
import styles from '../components/css/Login.module.css'
import Footer from '../components/footer/Footer'

const Login = () => {
    return (
        <>
            <div className={styles.login}>
                <div className={styles.loginBox}>
                    <h1 style={{ display: 'inline-block' }}>Login</h1>
                    <form action="" className={styles.formInput}>
                        <input type="text" name="" id="" placeholder="username" /> <br />
                        <input type="text" name="" id="" placeholder="password" /> <br />
                        <button type="submit" style={{ float: 'right' }}>Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
