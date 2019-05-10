import React from 'react';
import PropTypes from 'prop-types';
import Register from './Register';
import { Link } from 'react-router-dom';

function Create(props){
  let register = null;
  let clicked = false;
  function buttonClick() {
    clicked = true;
  }
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  }
  if (clicked) {
    register = <button style={ButtonStyle} onClick={() => buttonClick()}>Create Room</button>;
  } else {
    register = <Register />
  }
  return (
    <div>
      {register}
    </div>
  )
}

Create.propTypes = {
};

export default Create;
