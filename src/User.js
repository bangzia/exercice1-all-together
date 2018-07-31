import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return <li>{props.item}</li>;
};

User.propTypes = {
  User: PropTypes.string.isRequired
};

export default User;
