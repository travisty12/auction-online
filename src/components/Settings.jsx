import React from 'react';
import {Link} from 'react-router-dom';
import Time from './Time';
import BidInfo from './BidInfo';

function Settings(){
  const SettingsStyle = {
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  };
  const ButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
    fontSize: '2.75rem',
  };
  function confirmSettings() {
    console.log('confirmed');
  }
  return (
    <div style={SettingsStyle}>
      <h1>Settings</h1>
      <Time />
      <BidInfo />
      <button onClick={confirmSettings} ><Link style={ButtonStyle} to='/setup'>Confirm and Return</Link></button>
    </div>
  );
}

// Settings.propTypes = {
// };

export default Settings;
