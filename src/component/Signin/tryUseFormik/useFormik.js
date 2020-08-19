import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// Create empty context
const FormikContext = React.createContext({});

// Place all of what's returned by useFormik onto context
export const Formik = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
};
/////注册表
const SignupForm = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be less 15 characters")
        .min(8, "Must be more 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <input id="password" type="text" {...formik.getFieldProps("password")} />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
