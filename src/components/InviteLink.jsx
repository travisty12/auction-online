import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function InviteLink(props){
  const InviteLinkStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
  };
  return (
    <div style={InviteLinkStyle}>
      <h1>Invite Link</h1>
    </div>
  );
}

InviteLink.propTypes = {
};

export default InviteLink;
