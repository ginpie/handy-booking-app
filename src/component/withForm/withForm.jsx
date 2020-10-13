import React from 'react';

const withForm = (config) => (Component) => {
  const initFormData = () => Object
    .keys(config)
    .reduce((obj, key) => ({
      ...obj,
      [key]: {
        value: '',
        touched: false,
      },
    }), {});

  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        formData: initFormData(),
      };

      this.getData = this.getData.bind(this);
      this.getErrorMessage = this.getErrorMessage.bind(this);
      this.handleFormDataChange = this.handleFormDataChange.bind(this);
      this.isFormValid = this.isFormValid.bind(this);
    }

    getData() {
      const { formData } = this.state;
      const data = Object
        .keys(formData)
        .reduce((obj, key) => ({
          ...obj,
          [key]: formData[key].value,
        }), {});

      return data;
    }

    getErrorMessage(target) {
      const { formData } = this.state;

      const { getErrorMessage } = config[target];
      const { value } = formData[target];
      const data = this.getData();

      const errorMessage = getErrorMessage(value, data);

      return errorMessage;
    }

    handleFormDataChange(target) {
      return (event) => {
        event.preventDefault();
        const { value } = event.target;

        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [target]: {
              value,
              touched: true,
            },
          },
        }));
      };
    }

    isFormValid() {
      const { formData } = this.state;

      const errorMessages = Object
        .keys(formData)
        .map((key) => {
          const errorMessage = this.getErrorMessage(key);

          return errorMessage;
        })
        .filter((v) => !!v);

      return !errorMessages.length;
    }

    render() {
      const { formData } = this.state;

      return (
        <Component
          {...this.props}
          formData={formData}
          getData={this.getData}
          getErrorMessage={this.getErrorMessage}
          handleFormDataChange={this.handleFormDataChange}
          isFormValid={this.isFormValid}
        />
      );
    }
  }

  return Wrapper;
};

export default withForm;
