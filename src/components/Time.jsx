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
  const DivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let clicked = false;
  let timeSetup = null;
  function buttonClick() {
    clicked = true;
  }
  if (clicked) {
    timeSetup = <button style={TimeStyle} onClick={() => buttonClick()}>Set time</button>;
  } else {
    timeSetup = <div style={DivStyle} ><h3>Set auction time:</h3><input type="datetime-local" /><button style={TimeStyle}>Submit</button></div>
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
