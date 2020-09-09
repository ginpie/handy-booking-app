import React from "react";
import Styles from "./Form.module.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Emailvalue: "Email",
      Passwordvalue: "Password",
      ConfirmPasswordvalue: "Password",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword(this);
    // this.handleEmail = this.handleEmail.bind(this);
  }

  handleChange(event) {
    this.setState({
      Emailvalue: event.target.Emailvalue,
      Passwordvalue: event.target.Passwordvalue,
    });
  }
  handlePassword(event) {
    this.setState({
      ConfirmPasswordvalue: event.target.ConfirmPasswordvalue,
    });
    if (this.state.ConfirmPasswordvalue !== this.state.Passwordvalue) {
      document.querySelector(".submit").appendChild(".errorPassword");
    }
  }
  //需debug提交后的反馈
  handleSubmit(event) {
    alert(
      "Email: " +
        this.state.Emailvalue +
        "Password：" +
        this.state.Passwordvalue
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={Styles.layout}>
          <label className={Styles.label}>Email:</label>
          <input
            className={Styles.input}
            type="text"
            value={this.state.Emailvalue}
            onChange={this.handleChange}
          />

          <label className={Styles.label}>Password :</label>
          <input
            className={Styles.input}
            type="text"
            value={this.state.Passwordvalue}
            onChange={this.handlePassword}
          />

          <label className={Styles.label}>Confirm-Password :</label>
          <input
            className={Styles.input}
            type="text"
            value={this.state.ConfirmPasswordvalue}
            onChange={this.handlePassword}
          />
          {/* <button className={Styles.forget}>Forget Password ?</button> */}
          <input
            className={Styles.submit}
            type="submit"
            value="Join XXXXXXXXX"
          />
        </div>
      </form>
    );
  }
}

export default NameForm;
