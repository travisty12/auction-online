import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Time(props){
  const TimeStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
    border: 'none'
  };
  let clicked = false;
  let timeSetup = null;
  function buttonClick() {
    clicked = true;
  }
  if (clicked) {
    timeSetup = <button style={TimeStyle} onClick={() => buttonClick()}>Set time</button>;
  } else {
    timeSetup = <div ><h3>Set auction time:</h3><input /><button style={TimeStyle}>Submit</button></div>
  }
  return (
    <div>
      {timeSetup}
    </div>
  );
}

Time.propTypes = {
};

export default Time;
