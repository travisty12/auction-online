import React from 'react';
import PropTypes from 'prop-types';
import Back from './Back';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <Back />
      <h4>Auction Online</h4>
    </div>
  );
}

Header.propTypes = {
};

export default Header;
