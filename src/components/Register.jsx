import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Register(props){
  return (
    <div>
      <h3>Enter your email to recieve a room key:</h3>
      <input />
      <Link to="/setup"><button >Submit</button></Link>
    </div>
  );

}

Register.propTypes = {
};

export default Register;
