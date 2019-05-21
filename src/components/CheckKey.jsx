import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkRoom, changeJoinView } from './../actions';
function CheckKey(props){
  const { dispatch } = props;
  const ButtonStyle = {
    backgroundColor: '#800000',
    border: 'none',
    borderRadius: '10px',
    padding: '5px',
    color: 'white',
    fontSize: '2.75rem',
  };
  const CheckKeyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let _key = null;
  function keyChecker() {
    console.log(_key.value);
    dispatch(checkRoom(_key.value));
    // dispatch(changeJoinView());
    // <Link to="/room"></Link>
  }
  let renderRedirect = null;
  if (props.roomBuilt) {
    renderRedirect = <Redirect to='/room' />;
  } else {
    renderRedirect = null;
  }
  return (
    <form onSubmit={keyChecker} style={CheckKeyStyle}>
      <h3>Enter the room's key:</h3>
      <input ref={(input) => {_key = input;}} />
      <button type='submit' style={ButtonStyle} >Submit</button>
      {renderRedirect}
    </form>
  );

}

const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt,
  };
};

// CheckKey.propTypes = {
// };

export default connect(mapStateToProps)(CheckKey);
