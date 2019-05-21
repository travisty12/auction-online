import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CheckKey(){
  const ButtonStyle = {
    backgroundColor: '#800000',
    border: 'none',
    borderRadius: '10px',
    padding: '5px',
    color: 'white',
    fontSize: '2.75rem',
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
