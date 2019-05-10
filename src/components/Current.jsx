import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Current(props){
  const minBid = 5;
  const exampleItem = {
    item: 'Item1',
    bid: minBid,
    bidder: 'bidder1'
  }
  return (
    <div>
      <h1>Current item for bid:</h1>
      <div>
        <h2>{exampleItem.item}</h2>
        <h4>Highest bid: {exampleItem.bid}</h4>
        <h4>Bidder: {exampleItem.bidder}</h4>
      </div>
    </div>
  );
}

Current.propTypes = {
};

export default Current;
