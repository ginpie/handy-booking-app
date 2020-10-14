import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../../../NavigationLink';
import NakedButton from '../../../../../NakedButton';
import { withRouter } from '../../../../../Router';
import withAuthentication from '../../../../../withAuthentication';
import compose from '../../../../../../utils/compose';

const Logout = ({
  router,
  authentication,
}) => (
  <NavigationLink
    as={NakedButton}
    onClick={(event) => {
      event.preventDefault();
      authentication.setUser();
      router.push('/');
    }}
  >
    Log out
  </NavigationLink>
);

Logout.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  authentication: PropTypes.shape({
    setUser: PropTypes.func,
  }).isRequired,
};

const EnhancedLogout = compose(
  withRouter,
  withAuthentication,
)(Logout);

export default EnhancedLogout;