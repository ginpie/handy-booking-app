import React from "react";
import Styles from "./Form.module.css";
import { useFormik } from "formik";

const NameForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={Styles.layout}>
        <label className={Styles.label}>Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className={Styles.input}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <label className={Styles.label}>Password :</label>
        <input
          id="password"
          name="password"
          type="text"
          className={Styles.input}
          value={formik.values.passwordvalue}
          onChange={formik.handleChange}
        />

        <label className={Styles.label}>Confirm-Password :</label>
        <input
          id="confirmpassword"
          name="confirmpassword"
          type="text"
          className={Styles.input}
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
        />
        {/* <button className={Styles.forget}>Forget Password ?</button> */}
        <input className={Styles.submit} type="submit" value="Join XXXXXXXXX" />
      </div>
    </form>
  );
};

export default NameForm;
