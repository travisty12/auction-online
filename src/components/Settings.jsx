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
    border: 'none',
  };
  return (
    <div>
      <Time />
      <BidInfo />
    </div>
  );
}

Settings.propTypes = {
};

export default Settings;
