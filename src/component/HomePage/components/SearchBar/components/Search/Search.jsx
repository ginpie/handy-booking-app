import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: white;
`;

const Icon = ({ className }) => <i className={className}></i>;

const StyledIcon = styled(Icon)`
  width: 50px;
  font-size: 22px;
  align-self: center;
`;

const Input = styled.input`
  height: auto;
  width: 100%;
  border: none;
  padding: 0 0 0 5px;
  font-size: small;

  &:focus {
    outline: none;
  }
`;

const StyledInput = ({ placeholder, onChange, value, id, onBlur, onFocus }) => (
  <Input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    id={id}
    onBlur={onBlur}
    onFocus={onFocus}
  ></Input>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <Container>
        <StyledIcon className={this.props.icon}></StyledIcon>
        <StyledInput
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
          id={this.props.id}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        ></StyledInput>
      </Container>
    );
  }
}

export default Search;
