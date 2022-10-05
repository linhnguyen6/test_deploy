import React from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
// styles
import styles from "./Login.module.css";
const cx = classNames.bind(styles);

const Login = () => {
  document.title = "Login Page";

  const navigate = useNavigate();

  const handleRedirect = () => navigate("/signup");

  return (
    <div className={cx("container")}>
      <form action="" id="form-user"></form>
      <h2>LOGIN OR CREATE ACCOUNT</h2>
      <div className={cx("box-user")}>
        <div className={cx("box-signup")}>
          <h3>NEW CUSTOMERS</h3>
          <p>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <button onClick={handleRedirect}>CREATE AN ACCOUNT</button>
        </div>
        <div className={cx("box-login")}>
          <h3>REGISTERED CUSTOMERS</h3>
          <span>If you have an account with us, please log in.</span>
          <div className={cx("form-group")}>
            <label htmlFor="">
              EMAIL ADDRESS<span>*</span>
            </label>
            <input type="email" required form="form-user" />
          </div>
          <div className={cx("form-group")}>
            <label htmlFor="">
              PASSWORD<span>*</span>
            </label>
            <input type="email" required form="form-user" />
          </div>
          <label className={cx("forgot")} title="Yor forgot password ?">
            FORGOT YOUR PASSWORD ?
          </label>
          <button className={cx("btn-login")} form="form-user">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
