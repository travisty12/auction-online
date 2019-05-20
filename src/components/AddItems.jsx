import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AddItems(){
  const AddItemsStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
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
