import React from "react";
import "./Form.scss";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Emailvalue: "Email", Passwordvalue: "Password" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleChange(event) {
    this.setState({
      Emailvalue: event.target.Emailvalue,
      Passwordvalue: event.target.Passwordvalue,
    });
  }
 

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
        <label>
          Email:
          <input
            type="text"
            value={this.state.Emailvalue}
            onChange={(this.handleChange, this.handleEmail)}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            value={this.state.Passwordvalue}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Join XXXXXXXXX" />
      </form>
    );
  }
}

export default NameForm;
