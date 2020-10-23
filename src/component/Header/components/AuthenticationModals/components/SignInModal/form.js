const form = {
  email: {
    label: "Email",
    type: "text",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your email address";
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
};

export default form;
