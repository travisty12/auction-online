import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Chat from './Chat';
import Back from './Back';
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
      <div>
        <Back />
        <h1>Auction Online</h1>
      </div>
      <Items />
      <Chat />
    </div>
  );
}

Room.propTypes = {
};

export default Room;
