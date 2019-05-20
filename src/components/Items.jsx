import React from 'react';
// import PropTypes from 'prop-types';
import Previous from './Previous';
import Current from './Current';

function Items(){

  const minBid = 5;

  let masterItemList = [
    {
      item: 'Item1',
      bid: minBid,
      bidder: 'bidder1'
    },
    {
      item: 'Item2',
      bid: minBid,
      bidder: 'bidder2'
    },
    {
      item: 'Item3',
      bid: minBid,
      bidder: 'bidder3'
    },
  ];

  const ItemsStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  };

  return (
    <div style={ItemsStyle}>
      <Current />
      <Previous itemList={masterItemList} />
    </div>
  );
}

// Items.propTypes = {
// };

export default Items;
