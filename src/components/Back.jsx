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
  const BackStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
  }
  const LinkStyle = {
    color: 'white',
    textDecoration: 'none',
  }
  return (
    <div>
      <h4 style={BackStyle} onClick={resetMainPage()}><Link style = {LinkStyle} to='/'>Back</Link></h4>
    </div>
  );
}

// Back.propTypes = {
// };

export default connect()(Back);
