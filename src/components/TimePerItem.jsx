import React from 'react';
// import PropTypes from 'prop-types';

function TimePerItem(){
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
  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '2.75rem',
  };
  function timeSubmit() {
    console.log('time in');
  }
  return (
    <form onSubmit={timeSubmit} style={ContainerStyle}>
      <h3>Set time per item:</h3>
      <div style={TimePerItemStyle}>
        <input style={InputStyle} placeholder='60' /><p> seconds</p>
      </div>
      <button type='submit' style={ButtonStyle}>Set</button>
    </form>
  );
}

// TimePerItem.propTypes = {
// };

export default TimePerItem;
