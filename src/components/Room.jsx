import React from 'react';
// import PropTypes from 'prop-types';
import Items from './Items';
import Chat from './Chat';

function Room(){
  const RoomStyle = {
    width: '100%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  return (
    <div style={RoomStyle}>
      <Items />
      <Chat />
    </div>
  );
}

// Room.propTypes = {
// };

export default Room;
