import React from 'react';
import InviteLink from './InviteLink';
import Settings from './Settings';
import AddItems from './AddItems';
import PropTypes from 'prop-types';

function Setup(props){
  return (
    <div>
      <h1>Auction Online</h1>
      <InviteLink />
      <Settings />
      <AddItems />
    </div>
  );
}

Setup.propTypes = {
};

export default Setup;
