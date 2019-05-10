import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Chat from './Chat';
import { Link } from 'react-router-dom';

function Room(props){
  const RoomStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <div style={RoomStyle}>
    <Items />
    <Chat />
    </div>
  );
}

Room.propTypes = {
};

export default Room;
