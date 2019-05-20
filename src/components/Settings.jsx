import React from 'react';
// import PropTypes from 'prop-types';
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
  return (
    <div style={SettingsStyle}>
      <h1>Settings</h1>
      <Time />
      <BidInfo />
    </div>
  );
}

// Settings.propTypes = {
// };

export default Settings;
