import React from 'react';
// import PropTypes from 'prop-types';

function MinBid(props){
  const MinBidStyle = {
    display: 'flex'
  };
  const InputStyle = {
    width: '50px',
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
  let _bid = null;
  function bidSubmit() {
    props.onMinBidSet(_bid.value);
  }
  return (
    <form onSubmit={bidSubmit} style={ContainerStyle}>
      <h3>Set minimum bid:</h3>
      <div style={MinBidStyle}>
        <p>$</p><input style={InputStyle} placeholder='0' ref={(input) => {_bid = input}} />
      </div>
      <button type='submit' style={ButtonStyle}>Set</button>
    </form>
  );
}

// MinBid.propTypes = {
// };

export default MinBid;
