import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { resetMain } from './../actions';

function Back(props){
  const {dispatch} = props
  function resetMainPage() {
    dispatch(resetMain());
  }
  return (
    <div>
      <h4 onClick={resetMainPage()}><Link to='/'>Back</Link></h4>
    </div>
  );
}

// Back.propTypes = {
// };

export default connect()(Back);
