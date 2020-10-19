const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const form = {
  email: {
    label: "Email",
    type: "text",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your email address";
      }

      if (!EMAIL_REGEXP.test(value)) {
        return "Please enter a valid email address";
      }

      return "";
    },
  },
  password: {
    key: "password",
    label: "Password",
    type: "password",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your password";
      }

      return "";
    },
  },
  confirmPassword: {
    key: "confirmPassword",
    label: "Confirm password",
    type: "password",
    getErrorMessage: (value, data) => {
      if (!value) {
        return "Please enter your confirm password";
      }

      if (value !== data.password) {
        return "Your confirm password does not match";
      }

      return "";
    },
  },
};

export default form;
