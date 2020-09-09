import React from "react";
import Styles from "./Form.module.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  } else if (values.confirmpassword !== values.password) {
    errors.password = "Not Same";
  }
  return errors;
};
const NameForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
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
          // name="email"
          type="email"
          className={Styles.input}
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={Styles.errorText}>{formik.errors.email}</div>
        ) : null}
        <label className={Styles.label}>Password :</label>
        <input
          id="password"
          // name="password"
          type="text"
          className={Styles.input}
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("password")}
        />

        {formik.touched.password && formik.errors.password ? (
          <div className={Styles.errorText}>{formik.errors.password}</div>
        ) : null}
        <label className={Styles.label}>Confirm-Password :</label>
        <input
          id="confirmpassword"
          // name="confirmpassword"
          type="text"
          className={Styles.input}
          // value={formik.values.confirmpassword}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("confirmpassword")}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div className={Styles.errorText}>
            {formik.errors.confirmpassword}
          </div>
        ) : null}

        {/* <button className={Styles.forget}>Forget Password ?</button> */}
        <input className={Styles.submit} type="submit" value="Join XXXXXXXXX" />
      </div>
    </form>
  );
};

export default NameForm;
