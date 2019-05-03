import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { Link } from 'react-router-dom';

function MessageList(props){
  return (
    <div>
      <h1>MessageList Working</h1>
      <Message />
    </div>
  );
}

MessageList.propTypes = {
};

export default MessageList;
