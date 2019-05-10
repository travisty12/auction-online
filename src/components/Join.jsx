import React from 'react';
import PropTypes from 'prop-types';
import CheckKey from './CheckKey';
import { Link } from 'react-router-dom';

function Join(props){
  let keyChecker = null;
  let clicked = false;
  function buttonClick() {
    clicked = true;
  }
  if (clicked) {
    keyChecker = <button onClick={() => buttonClick()}>Join Room</button>;
  } else {
    keyChecker = <CheckKey />
  }
  return (
    <div>
      {keyChecker}
    </div>
  )
}

Join.propTypes = {
};

export default Join;
