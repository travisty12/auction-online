import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CheckKey(){
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  };
  const CheckKeyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div style={CheckKeyStyle}>
      <h3>Enter the room's key:</h3>
      <input />
      <Link to="/room"><button style={ButtonStyle} >Submit</button></Link>
    </div>
  );

}

// CheckKey.propTypes = {
// };

export default CheckKey;
