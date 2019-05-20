import React from 'react';
// import PropTypes from 'prop-types';
import Back from './Back';

function Header(){
  const HeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  };
  return (
    <div style={HeaderStyle}>
      <Back />
      <h1>Auction Online</h1>
      <h6>.</h6>
    </div>
  );
}

// Header.propTypes = {
// };

export default Header;
