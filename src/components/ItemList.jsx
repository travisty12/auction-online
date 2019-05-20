import React from 'react';
import PropTypes from 'prop-types';
import NewItem from './NewItem';
import {connect} from 'react-redux';
import * as actions from './../actions';

function ItemList(props){

  const ItemListStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const { dispatch } = props;
  const { watchFirebaseRoomsRef, addRoom } = actions;
  dispatch(watchFirebaseRoomsRef());
  function handleAddItems() {
    dispatch(addRoom(['thing1','thing2'],'5pm',10,30));
  }
  return (
    <div>
      <NewItem />
      {props.newItem.map((item, index) =>
        <div style={ItemListStyle} key={index}>
          <h3>{index}: - {item.item}</h3>
          <button>Remove</button>
        </div>
      )}
      <button onClick={() => handleAddItems()}>Confirm Items</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    newItem: state.newItem
  };
};

ItemList.propTypes = {
  newItem: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number,PropTypes.string]))),
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(ItemList);
