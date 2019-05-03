import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Previous from './Previous';
import Current from './Current';

function Items(props){
  return (
    <div>
      <h1>Items Working</h1>
      <Previous />
      <Current />
    </div>
  );
}

Items.propTypes = {
};

export default Items;
