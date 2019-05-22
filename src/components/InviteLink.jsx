import React from 'react';
// import PropTypes from 'prop-types';

function InviteLink(props){
  const InviteLinkStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
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
