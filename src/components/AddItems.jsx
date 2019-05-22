import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddItems(){
  const AddItemsStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  const LinkStyle = {
    textDecoration: 'none',
  };
  let addItemsContents = <Link to='/additems' style={LinkStyle}><h1 style={AddItemsStyle}>Add Items</h1></Link>;

  return (
    <div>
      {addItemsContents}
    </div>
  );
}

// AddItems.propTypes = {
// };

export default AddItems;
