import React from 'react';
import InviteLink from './InviteLink';
import AddItems from './AddItems';
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Setup(props){
  const SetupStyle = {
    display: 'flex',
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  console.log(props.roomBuilt);
  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '2.75rem',
  };
  let safeguard = null;
  if (!props.roomBuilt) {
    safeguard = <Redirect to='/' />
  } else {
    safeguard = null;
  }
  return (
    <div style={SetupStyle}>
      {safeguard}
      <InviteLink linkId = {props.roomBuilt} />
      <Link to='/settings'><button style={ButtonStyle}>Settings</button></Link>
      <AddItems />
      <button style={ButtonStyle}>Finalize</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt
  };
};

// Setup.propTypes = {
// };

export default connect(mapStateToProps)(Setup);
