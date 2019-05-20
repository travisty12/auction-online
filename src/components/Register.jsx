import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Register(){
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  };
  const RegisterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div style={RegisterStyle}>
      <h3>Enter your email to recieve a room key:</h3>
      <input />
      <Link to="/setup"><button style={ButtonStyle} >Submit</button></Link>
    </div>
  );

}

// Register.propTypes = {
// };

export default Register;
