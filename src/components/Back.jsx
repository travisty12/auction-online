import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Back(props){
  return (
    <div>
      <h4><Link to='/'>Back</Link></h4>
    </div>
  );
}

Back.propTypes = {
};

export default Back;
