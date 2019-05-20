import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';

function NewItem(props){
  const NewItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let _name = null;
  const { addItem } = actions;
  function handleSubmitNewItem(event) {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(addItem(_name.value));
    _name.value = '';
  }
  return (
    <div>
      <form onSubmit={handleSubmitNewItem} style = {NewItemStyle}>
        <h3>Item to add:</h3>
        <input
          type='text'
          id='name'
          placeholder='item name...'
          ref={(input) => {_name = input;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

NewItem.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewItem);
