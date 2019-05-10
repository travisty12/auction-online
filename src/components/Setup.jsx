import React from 'react';
import InviteLink from './InviteLink';
import Settings from './Settings';
import AddItems from './AddItems';
import Back from './Back';
import PropTypes from 'prop-types';

function Setup(props){
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
      <Settings />
      <AddItems />
      <button style={ButtonStyle}>Confirm</button>
    </div>
  );
}

Setup.propTypes = {
};

export default Setup;
