import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
  const MessageStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  return (
    <div style={MessageStyle}>
      <div>
        <h4>{props.name} - {props.time}</h4>
      </div>
      <h4>{props.content}</h4>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.string,
};

export default Message;
