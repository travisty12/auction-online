import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Items from './Items';
import Chat from './Chat';
import {changeJoinView, setPreviousView} from './../actions';
function Room(props){
  const { dispatch } = props;
  dispatch(changeJoinView());
  dispatch(setPreviousView());
  const RoomStyle = {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  let safeguard = null;
  if (!props.roomBuilt) {
    safeguard = <Redirect to='/' />
  } else {
    safeguard = null;
  }
  return (
    <div style={RoomStyle}>
      {safeguard}
      <Items />
      <Chat />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt
  };
};

// Room.propTypes = {
// };

export default connect(mapStateToProps)(Room);
