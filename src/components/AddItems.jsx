import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import NewItem from './NewItem';

function AddItems(props){
  const AddItemsStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
  };
  let addItemsContents = <h1 style={AddItemsStyle}>Add Items</h1>;
  let list = <ItemList />;

  return (
    <div>
      {addItemsContents}
    </div>
  );
}

AddItems.propTypes = {
};

export default AddItems;
