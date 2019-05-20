import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Register(props){
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white'
  };
  const RegisterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  let _email = null;
  const { dispatch } = props;
  function onSubmitEmail(event) {
    event.preventDefault();
    dispatch(checkRoom(_email));

  }
  let renderRedirect = null;
  if (props.roomBuilt) {
    renderRedirect = <Redirect to='/setup' />;
  }
  return (
    <form onSubmit={() => onSubmitEmail} style={RegisterStyle}>
      <h3>Enter your email to recieve your room key (OPTIONAL):</h3>
      <input
        type='text'
        id='email'
        placeholder='example@site.com'
        ref={(input) => {_email = input;}}/>
      <button style={ButtonStyle} type='submit'>Submit</button>
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
