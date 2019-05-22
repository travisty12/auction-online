import React from 'react';
// import PropTypes from 'prop-types';
import MessageList from './MessageList';
import Compose from './Compose';
import { connect} from 'react-redux';

function Chat(props){
  const ChatStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return (
    <div style ={ChatStyle}>
      <MessageList messageList = {props.messageList}/>
      <Compose />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    messageList: state.messageList,
  };
};

// Chat.propTypes = {
// };

export default connect(mapStateToProps)(Chat);
