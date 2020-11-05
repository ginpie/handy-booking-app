import React from 'react';
import PropTypes from 'prop-types';
import Linkitem from '../../../LinkItem';
import withAuthentication from '../../../../../withAuthentication';
import compose from '../../../../../../utils/compose';

const Logout = ({
  authentication,
}) => (
  <Linkitem
    linkType={"text"}
    onClick={(event) => {
      event.preventDefault();
      authentication.setUser();
      window.location='/';

    }}
  >
    Log out
  </Linkitem>
);

Logout.propTypes = {
  authentication: PropTypes.shape({
    setUser: PropTypes.func,
  }).isRequired,
};

const EnhancedLogout = compose(
  withAuthentication,
)(Logout);

export default EnhancedLogout;