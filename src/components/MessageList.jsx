import React from 'react';
// import PropTypes from 'prop-types';
import Message from './Message';
import Moment from 'moment';

function MessageList(props){

  let masterMessageList = [
    {
      name: 'example1',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'hello'
    },
    {
      name: 'example2',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'test 2'
    },
    {
      name: 'example3',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'third post'
    },
  ];

  const MessageListStyle = {
    padding: '2px',
    backgroundColor: 'grey',
    width: '100%'
  };
  return (
    <div style={MessageListStyle}>
      {props.messageList.map((message, index) =>
        <Message name={message.name} content={message.message} key={index}/>
      )}
    </div>
  );
}

// MessageList.propTypes = {
// };

export default MessageList;
