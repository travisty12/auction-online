import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Register(props){
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  }
  return (
    <div>
      <h3>Enter your email to recieve a room key:</h3>
      <input />
      <Link to="/setup"><button style={ButtonStyle} >Submit</button></Link>
    </div>
  );

}

Register.propTypes = {
};

export default Register;
