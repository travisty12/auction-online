import React from 'react';
// import PropTypes from 'prop-types';
import MinBid from './MinBid';
import TimePerItem from './TimePerItem';

function BidInfo(){
  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
    border: 'none',
  };
  const BidInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let clicked = false;
  let biddingSetup = null;
  function buttonClick() {
    clicked = true;
  }
  if (!clicked) {
    biddingSetup = <button style={ButtonStyle} onClick={() => buttonClick()}>Set bid specs</button>;
  } else {
    biddingSetup = <div style={BidInfoStyle}><MinBid /><TimePerItem /><button style={ButtonStyle}>Submit</button></div>;
  }
  return (
    <div>
      {biddingSetup}
    </div>
  );
}

// BidInfo.propTypes = {
// };

export default BidInfo;
