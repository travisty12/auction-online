import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Time from './Time';
import BidInfo from './BidInfo';

function Settings(props){
  const SettingsStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
  };
  let settingsContents = <h1 style={SettingsStyle}>Settings</h1>;
  let innerSettings = <div><Time /><BidInfo /></div>;
  return (
    <div>
      {settingsContents}
    </div>
  );
}

Settings.propTypes = {
};

export default Settings;
