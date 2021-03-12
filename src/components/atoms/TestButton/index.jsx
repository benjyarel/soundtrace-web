import React from 'react';
import PropTypes from 'prop-types';

const TestButton = ({text}) => {
  return <button>{text}</button>;
};

TestButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default TestButton;
