import React from 'react';
// import PropTypes from 'prop-types';
import CheckKey from './CheckKey';

function Join(){
  let keyChecker = null;
  let clicked = false;
  function buttonClick() {
    clicked = true;
  }
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  };
  if (clicked) {
    keyChecker = <button style={ButtonStyle} onClick={() => buttonClick()}>Join Room</button>;
  } else {
    keyChecker = <CheckKey />;
  }
  return (
    <div>
      {keyChecker}
    </div>
  );
}

// Join.propTypes = {
// };

export default Join;
