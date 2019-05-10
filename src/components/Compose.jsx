import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Compose(props){
  const ComposeStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  const InputStyle = {
    width: '100%'
  }
  return (
    <div style={ComposeStyle}>
      <input style={InputStyle} />
      <button>Submit</button>
    </div>
  );
}

Compose.propTypes = {
};

export default Compose;
