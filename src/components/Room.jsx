import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Items from './Items';
import Chat from './Chat';
import {changeJoinView, setPreviousView, startWatch, watchFirebaseMessagesRef} from './../actions';
function Room(props){
  const { dispatch } = props;
  if (!props.isWatching) {
    watchFirebaseMessagesRef(dispatch, props.roomBuilt);
  }
  // dispatch(changeJoinView());
  // dispatch(setPreviousView());
  const RoomStyle = {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  let safeguard = null;
  let timeTilAuction = 0;
  // let timer = setInterval(function() {
  //   console.log(parseInt((Date.parse(props.settings.time) - Date.now()) / 1000));
  // }, 1000);
  if (!props.roomBuilt) {
    // clearInterval(timer);
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
    roomBuilt: state.roomBuilt,
    settings: state.settings,
    isWatching: state.isWatching,
  };
};

// Room.propTypes = {
// };

export default connect(mapStateToProps)(Room);
