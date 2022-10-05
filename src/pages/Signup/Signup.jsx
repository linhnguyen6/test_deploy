import React from "react";
import classNames from "classnames/bind";
// styles
import styles from "./Signup.module.css";
const cx = classNames.bind(styles);

const Signup = () => {
  document.title = "Signup Page";
  return (
    <div className={cx("container")}>
      <h2>CREATE AN ACCOUNT</h2>
      <h3>PERSONAL INFORMATION</h3>
      <form className={cx("box-signup")} id="form-signup">
        <div>
          <div className={cx("form-input")}>
            <label htmlFor="">
              FIRST NAME<span>*</span>
            </label>
            <input type="text" required />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">
              EMAIL ADDRESS<span>*</span>
            </label>
            <input type="email" required />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">
              PASSWORD<span>*</span>
            </label>
            <input type="password" required />
          </div>
        </div>
        <div>
          <div className={cx("form-input")}>
            <label htmlFor="">
              LAST NAME<span>*</span>
            </label>
            <input type="text" required />
          </div>
          <div className={cx("form-input")}>
            <label htmlFor="">
              CONFIRM PASSWORD<span>*</span>
            </label>
            <input type="password" required />
          </div>
        </div>
      </form>
      <button form="form-signup" className={cx("btn-signup")}>
        SUBMIT
      </button>
    </div>
  );
};

export default Signup;
