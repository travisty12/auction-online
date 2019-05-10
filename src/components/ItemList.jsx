import React from 'react';
import PropTypes from 'prop-types';
import NewItem from './NewItem';
import { Link } from 'react-router-dom';

function ItemList(props){
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

  const ItemListStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div>
      <NewItem />
      {masterItemList.map((item, index) =>
        <div style={ItemListStyle} key={index}>
          <h3>{index}: - {item.item}</h3>
          <h3>Minimum bid: ${item.bid}</h3>
        </div>
      )}
    </div>
  );
}

ItemList.propTypes = {
};

export default ItemList;
