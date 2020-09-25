import React from "react";
import Styles from "./TableFooter.module.css";

const TableFooter = () => (
  <div>
    <div className={Styles.Divider}>
      <p>or Signin up With</p>
    </div>
    <div className={Styles.layout}>
      <button className={Styles.MediaF}>Facebook</button>
      <button className={Styles.MediaF}>Google</button>
    </div>
    <div>
      <p>
        By signing up, I agree to XXXXXX's{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.Condition}
          href="https:\\www.google.com"
        >
          Terms & Conditions
        </a>
        , and <span className={Styles.Condition}>Community Guidelines</span>.{" "}
        <span className={Styles.Condition}>Privacy Policy</span>.
      </p>
    </div>
    <div className={Styles.SwichContainer}>
      <div className={Styles.Content}>
        <span className={Styles.Swich}>Already have an account ?</span>
        <button className={Styles.Input}>Log in</button>
      </div>
    </div>
  </div>
);

export default TableFooter;
