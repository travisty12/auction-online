import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from './Register';
import { changeView } from './../actions';

function Create(props){
  let register = null;
  let clicked = false;
  const { dispatch } = props;
  function buttonClick() {
    dispatch(changeView());
  }
  const ButtonStyle = {
    backgroundColor: '#800000',
    border: 'none',
    borderRadius: '10px',
    padding: '5px',
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
    registerView: state.registerView
  };
};

// Create.propTypes = {
// };

export default connect(mapStateToProps)(Create);
