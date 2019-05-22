import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {checkRoom, registerRoom, clearLocal, changeView} from './../actions';

function Register(props){
  const ButtonStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  const RegisterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let _key = null;
  const { dispatch } = props;
  function onSubmitKey(event) {
    event.preventDefault();
    if (_key.value) {
      console.log('1');
      dispatch(checkRoom(_key.value));
      _key.value = null;
    } else {
      console.log('2');
      dispatch(clearLocal());
      dispatch(registerRoom());
    }
    // dispatch(changeView());
  }
  let renderRedirect = null;
  if (props.roomBuilt) {
    renderRedirect = <Redirect to='/setup' />;
  } else {
    renderRedirect = null;
  }
  return (
    <form onSubmit={() => onSubmitKey(event)} style={RegisterStyle}>
      <h3>Create a new auction room now!</h3>
      <h5>Already made a room? Enter your key to edit (OPTIONAL):</h5>
      <input
        type='text'
        id='key'
        placeholder='optional key'
        ref={(input) => {_key = input;}}/>
      <button style={ButtonStyle} type='submit'>Go!</button>
      {renderRedirect}
    </form>
  );

}


const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt
  };
};

// Register.propTypes = {
// };

export default connect(mapStateToProps)(Register);
