import React from 'react';
import { connect } from 'react-redux';
import {pushMessage} from './../actions';

function Compose(props){
  const ComposeStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  const InputStyle = {
    width: '70%'
  };
  const NameStyle = {
    width: '30%'
  };
  const { dispatch } = props;
  let _name = null;
  let _message = null;
  function onMessageSend() {
    dispatch(pushMessage(_name.value, _message.value, props.roomId, props.messageList.length));
    _message.value = null;
  }
  return (
    <form onSubmit={() => onMessageSend()} style={ComposeStyle}>
      <input style={NameStyle} ref={(input) => {_name = input}} />
      <input style={InputStyle} ref={(input) => {_message = input}} />
      <button type='submit'>Submit</button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    roomId: state.roomBuilt,
    messageList: state.messageList,
  };
};

// Compose.propTypes = {
// };

export default connect(mapStateToProps)(Compose);
