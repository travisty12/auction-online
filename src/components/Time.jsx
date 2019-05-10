import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Time(props){
  const TimeStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
  };
  return (
    <div>
      <h1 style={TimeStyle}>Set time</h1>
    </div>
  );
}

Time.propTypes = {
};

export default Time;
