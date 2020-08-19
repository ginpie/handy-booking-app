const Validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must less 15 characters";
  } else if (values.password.length < 8) {
    errors.password = "Must more than 8 characters";
  }

  return errors;
};
export default Validate;
