import React from 'react';
import InviteLink from './InviteLink';
import AddItems from './AddItems';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Setup(){
  const SetupStyle = {
    display: 'flex',
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    border: 'none',
  };
  return (
    <div style={SetupStyle}>
      <InviteLink />
      <Link to='/settings'><button style={ButtonStyle}>Settings</button></Link>
      <AddItems />
      <button style={ButtonStyle}>Confirm</button>
    </div>
  );
}

// Setup.propTypes = {
// };

export default Setup;
