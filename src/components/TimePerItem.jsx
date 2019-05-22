import React from 'react';
// import PropTypes from 'prop-types';

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
  const ButtonStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  let _tpi = null;
  function timeSubmit() {
    props.onTpiSet(_tpi.value);
  }
  return (
    <form onSubmit={timeSubmit} style={ContainerStyle}>
      <h3>Set time per item:</h3>
      <div style={TimePerItemStyle}>
        <input style={InputStyle} placeholder='60' ref={(input) => {_tpi = input}} /><p> seconds</p>
      </div>
      <button type='submit' style={ButtonStyle}>Set</button>
    </form>
  );
}

// TimePerItem.propTypes = {
// };

export default TimePerItem;
