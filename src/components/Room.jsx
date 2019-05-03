import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Chat from './Chat';
import { Link } from 'react-router-dom';

function Room(props){
  return (
    <div>
    <Items />
    <Chat />
    </div>
  );
}

Room.propTypes = {
};

export default Room;
