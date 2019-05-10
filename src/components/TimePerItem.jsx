import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TimePerItem(props){
  const TimePerItemStyle = {
    display: 'flex'
  };
  const InputStyle = {
    width: '30px',
    backgroundColor: 'transparent',
    border: '1px dotted black',
    borderRadius: '20px',
    textAlign: 'center',
  };
  const ContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <div style={ContainerStyle}>
      <h3>Set time per item:</h3>
      <div style={TimePerItemStyle}>
        <input style={InputStyle} placeholder='60' /><p> seconds</p>
      </div>
    </div>
  );
}

TimePerItem.propTypes = {
};

export default TimePerItem;
