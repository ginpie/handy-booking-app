import React from 'react';

const withFetch = (Component) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        loading: false,
      };

      this.fetch = this.fetch.bind(this);
    }

    fetch(fetcher) {
      this.setState({
        error: null,
        loading: false,
      });

      return fetcher()
        .then((res) => {
          this.setState({
            loading: false,
          });
          return res.data;
        })
        .catch((error) => {
          this.setState({
            loading:false,
            error:error.response,
          })
          throw error;
        });
    }

    render() {
      const { error, loading } = this.state;

      return (
        <Component
          {...this.props}
          error={error}
          loading={loading}
          fetch={this.fetch}
        />
      );
    }
  }

  return Wrapper;
};

export default withFetch;
