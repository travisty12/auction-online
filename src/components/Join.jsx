import React from 'react';
// import PropTypes from 'prop-types';
import CheckKey from './CheckKey';
import {connect} from 'react-redux';
import {changeJoinView} from './../actions';

function Join(props){
  let keyChecker = null;
  const {dispatch} = props;
  function buttonClick() {
    dispatch(changeJoinView());
  }
  const ButtonStyle = {
    backgroundColor: '#800000',
    border: 'none',
    borderRadius: '10px',
    padding: '5px',
    color: 'white',
    fontSize: '2.75rem',
  };
  if (props.joinView) {
    keyChecker = <button style={ButtonStyle} onClick={() => buttonClick()}>Join Room</button>;
  } else {
    keyChecker = <CheckKey />;
  }
  return (
    <div>
      {keyChecker}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    joinView: state.joinView
  };
};

// Create.propTypes = {
// };

export default connect(mapStateToProps)(Join);
