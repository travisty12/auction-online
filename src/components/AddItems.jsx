import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import NewItem from './NewItem';

function AddItems(props){
  return (
    <div>
      <h1>AddItems Working</h1>
      <ItemList />
    </div>
  );
}

AddItems.propTypes = {
};

export default AddItems;
