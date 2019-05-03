import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Time from './Time';
import BidInfo from './BidInfo';

function Settings(props){
  return (
    <div>
      <h1>Settings Working</h1>
      <Time />
      <BidInfo />
    </div>
  );
}

Settings.propTypes = {
};

export default Settings;
