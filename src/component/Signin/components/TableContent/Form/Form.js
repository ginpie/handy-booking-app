import React from "react";
import "./Form.scss";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Emailvalue: "Email", Passwordvalue: "Password" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
  }

  handleChange(event) {
    this.setState({
      Emailvalue: event.target.Emailvalue,
      Passwordvalue: event.target.Passwordvalue,
    });
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
        <div className="form--layout">
          <label className="form--layout--label">Email:</label>
          <input
            className="form--layout--input"
            type="text"
            value={this.state.Emailvalue}
            onChange={this.handleChange}
          />

          <label className="form--layout--label">Password :</label>
          <input
            className="form--layout--input"
            type="text"
            value={this.state.Passwordvalue}
            onChange={this.handleChange}
          />

          <input
            className="form--layout--input submit"
            type="submit"
            value="Join XXXXXXXXX"
          />
        </div>
      </form>
    );
  }
}

export default NameForm;
