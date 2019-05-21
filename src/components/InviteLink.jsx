import React from 'react';
// import PropTypes from 'prop-types';

function InviteLink(props){
  const InviteLinkStyle = {
    backgroundColor: '#800000',
    color: 'white',
    padding: '5px',
    borderRadius: '10px',
  };
  return (
    <div style={InviteLinkStyle}>
      <h1>Invite Link</h1>
      <p>{props.linkId}</p>
    </div>
  );
}

// InviteLink.propTypes = {
// };

export default InviteLink;
