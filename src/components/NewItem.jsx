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
  const ButtonStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  const InputStyle = {
    width: '100px',
    backgroundColor: 'transparent',
    border: '1px dotted black',
    borderRadius: '20px',
    textAlign: 'center',
    padding: '5px 0px 5px 0px',
    margin: '10px 0 10px 0',
  };
  return (
    <div>
      <form onSubmit={handleSubmitNewItem} style = {NewItemStyle}>
        <h3>Item to add:</h3>
        <input
          style={InputStyle}
          type='text'
          id='name'
          placeholder='item name...'
          ref={(input) => {_name = input;}}/>
        <button style={ButtonStyle} type='submit'>Add</button>
      </form>
    </div>
  );
}

NewItem.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewItem);
