import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Message(props){
  const MessageStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px'
  };
  return (
    <div style={MessageStyle}>
      <h4>{props.name} - {props.timestamp}</h4>
      <h4>{props.content}</h4>
    </div>
  );
}

Message.propTypes = {
};

export default Message;
