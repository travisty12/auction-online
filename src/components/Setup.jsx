import React from 'react';
import InviteLink from './InviteLink';
import Settings from './Settings';
import AddItems from './AddItems';
import Back from './Back';
import PropTypes from 'prop-types';

function Setup(props){
  return (
    <div>
      <InviteLink />
      <Settings />
      <AddItems />
    </div>
  );
}

Setup.propTypes = {
};

export default Setup;
