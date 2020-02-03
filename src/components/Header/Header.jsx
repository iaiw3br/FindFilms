import React from 'react';
import PropsTypes from 'prop-types';

const Header = ({ text }) => (
  <header className="App-header">
    <h2>{text}</h2>
  </header>
);

Header.propTypes = {
  text: PropsTypes.string.isRequired,
};

export default Header;
