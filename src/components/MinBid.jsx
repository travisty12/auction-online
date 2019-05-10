import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MinBid(props){
  const MinBidStyle = {
    display: 'flex'
  };
  const InputStyle = {
    width: '50px',
    backgroundColor: 'transparent',
    border: '1px dotted black',
    borderRadius: '20px',
    textAlign: 'center',
  };
  const ContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div style={ContainerStyle}>
      <h3>Set minimum bid:</h3>
      <div style={MinBidStyle}>
        <p>$</p><input style={InputStyle} placeholder='0' />
      </div>
    </div>
  );
}

MinBid.propTypes = {
};

export default MinBid;
