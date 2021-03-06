import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from './Register';
import { changeView, changeJoinView } from './../actions';

function Create(props){
  let register = null;
  let clicked = false;
  const { dispatch } = props;
  function buttonClick() {
    dispatch(changeView());
    if (!props.joinView) {
      dispatch(changeJoinView());
    }
  }
  const ButtonStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  if (props.registerView) {
    register = <button style={ButtonStyle} onClick={() => buttonClick()}>Create Room</button>;
  } else {
    register = <Register />;
  }
  return (
    <div>
      {register}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    registerView: state.registerView,
    joinView: state.joinView,
  };
};

// Create.propTypes = {
// };

export default connect(mapStateToProps)(Create);
