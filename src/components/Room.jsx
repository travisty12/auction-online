import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Chat from './Chat';
import { Link } from 'react-router-dom';

function Room(props){
  const RoomStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
  return (
    <div style={RoomStyle}>
      <h1>Auction Online</h1>
      <Items />
      <Chat />
    </div>
  );
}

Room.propTypes = {
};

export default Room;
