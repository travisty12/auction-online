import React from 'react';
import PropTypes from 'prop-types';
import Back from './Back';
import { Link } from 'react-router-dom';

function Header(props){
  const HeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
  return (
    <div style={HeaderStyle}>
      <Back />
      <h1>Auction Online</h1>
      <h6>.</h6>
    </div>
  );
}

Header.propTypes = {
};

export default Header;
