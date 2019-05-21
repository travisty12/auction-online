import React from 'react';
import PropTypes from 'prop-types';
import NewItem from './NewItem';
import {connect} from 'react-redux';
import * as actions from './../actions';
import { Link } from 'react-router-dom';

function ItemList(props){

  const ItemListStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    fontSize: '2.75rem',
  };
  const { dispatch } = props;
  const { addToRoom, removeItem } = actions;
  function handleAddItems() {
    dispatch(addToRoom(props.newItem, props.roomBuilt));
  }
  function handleRemoveItem(index) {
    dispatch(removeItem(props.newItem, props.roomBuilt, index));
  }
  function returnToSettings() {

  }
  return (
    <div>
      <NewItem />
      {props.newItem.map((item, index) =>
        <div style={ItemListStyle} key={index}>
          <h3>{index}: - {item.item}</h3>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      )}
      <button style={ButtonStyle} onClick={() => handleAddItems()}>Confirm Items</button>
      <button><Link style={ButtonStyle} to='/setup'>Return</Link></button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    newItem: state.newItem,
    roomBuilt: state.roomBuilt,
  };
};

ItemList.propTypes = {
  newItem: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number,PropTypes.string]))),
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(ItemList);
