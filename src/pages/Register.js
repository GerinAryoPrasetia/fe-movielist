import React from "react";
import styles from "../components/css/Login.module.css";
import Footer from "../components/footer/Footer";

const Register = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginBox}>
          <h1 style={{ display: "inline-block" }}>Register</h1>
          <form action="" className={styles.formInput}>
            <input type="text" name="email" id="email" placeholder="email" />{" "}
            <br />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
            />{" "}
            <br />
            <button type="submit" style={{ float: "right" }}>
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
