import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Landing(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Landing.propTypes = {
};

export default Landing;
