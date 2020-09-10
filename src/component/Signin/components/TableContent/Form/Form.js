import React from "react";
import Styles from "./Form.module.css";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={Styles.label}>
        {label}
      </label>
      <input className={Styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={Styles.errorText}>{meta.error}</div>
      ) : null}
    </>
  );
};
const NameForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmpassword: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must more than 8 characters")
          .max(12, "Must be 12 characters or less")
          .matches(
            /((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Must Contain at least One Uppercase, One Lowercase, One Number and one special case Character"
          )
          .required("Required"),
        confirmpassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className={Styles.layout}>
          {/* <label className={Styles.label}>Email:</label> */}
          {/* <Field
            name="email"
            // name="email"
            // type="email"
            // className={Styles.input}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps("email")}
          /> */}
          {/* <ErrorMessage name="email" /> */}
          {/* {formik.touched.email && formik.errors.email ? (
            <div className={Styles.errorText}>{formik.errors.email}</div>
          ) : null} */}
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="JRNB@gmail.com"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />
          <MyTextInput
            label="Confirm Password"
            name="confirmpassword"
            type="password"
          />
          {/* <label className={Styles.label}>Password :</label>
          <Field
            name="password"
            // name="password"
            type="text"
            className={Styles.input}
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            //   ||
            // {...formik.getFieldProps("password")}
          /> */}
          {/* {formik.touched.password && formik.errors.password ? (
            <div className={Styles.errorText}>{formik.errors.password}</div>
          ) : null} */}
          {/* <ErrorMessage name="password" />
          <label className={Styles.label}>Confirm-Password :</label>
          <Field
            name="confirmpassword"
            // name="confirmpassword"
            type="text"
            className={Styles.input}
            // value={formik.values.confirmpassword}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps("confirmpassword")}
          />
          {/* {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className={Styles.errorText}>
              {formik.errors.confirmpassword}
            </div>
          ) : null} */}
          {/* <ErrorMessage name="confirmpassword" className="errorText" /> */}
          {/* <button className={Styles.forget}>Forget Password ?</button> */}
          <input
            className={Styles.submit}
            type="submit"
            value="Join XXXXXXXXX"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default NameForm;
