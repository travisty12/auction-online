import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NewItem(props){
  const NewItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  return (
    <div style = {NewItemStyle}>
      <h3>Item to add:</h3>
      <input placeholder='item name...' />
      <h4>Minimum bid (optional):</h4>
      <input placeholder='0' />
    </div>
  );
}

NewItem.propTypes = {
};

export default NewItem;
