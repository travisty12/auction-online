import React from 'react';
// import PropTypes from 'prop-types';
import Back from './Back';
import { connect } from 'react-redux';
import * as actions from './../actions';

function Header(props){
  const { dispatch } = props;
  const { watchFirebaseRoomsRef } = actions;
  dispatch(watchFirebaseRoomsRef());
  const HeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  };
  return (
    <div style={HeaderStyle}>
      <Back />
      <h1>Auction Online</h1>
      <h6>.</h6>
    </div>
  );
}

// Header.propTypes = {
// };

export default connect()(Header);
