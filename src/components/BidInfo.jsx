import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MinBid from './MinBid';
import TimePerItem from './TimePerItem';

function BidInfo(props){
  return (
    <div>
      <h1>Setup bidding</h1>
      <MinBid />
      <TimePerItem />
    </div>
  );
}

BidInfo.propTypes = {
};

export default BidInfo;
