import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageList from './MessageList';
import Compose from './Compose';

function Chat(props){
  return (
    <div>
      <h1>Chat Working</h1>
      <MessageList />
      <Compose />
    </div>
  );
}

Chat.propTypes = {
};

export default Chat;
