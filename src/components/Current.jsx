import React from 'react';
// import PropTypes from 'prop-types';

function Current(){
  const minBid = 5;
  const exampleItem = {
    item: 'Item1',
    bid: minBid,
    bidder: 'bidder1'
  };
  const CurrentItemStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  };
  const CurrentStyle = {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: '20px',
  };
  return (
    <div style={CurrentStyle}>
      <div style={CurrentItemStyle}>
        <h2>{exampleItem.item}</h2>
        <h4>Highest bid: {exampleItem.bid}</h4>
        <h4>Bidder: {exampleItem.bidder}</h4>
      </div>
      <div>
        <h3>Make bid</h3>
        <div>
          <input />
          <button >Go</button>
        </div>
      </div>
    </div>
  );
}

// Current.propTypes = {
// };

export default Current;
