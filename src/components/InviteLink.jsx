import React from 'react';
// import PropTypes from 'prop-types';

function InviteLink(props){
  const InviteLinkStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '1.75rem',
  };
  return (
    <div style={InviteLinkStyle}>
      <h4>Invite Link</h4>
      <h5>{props.linkId}</h5>
    </div>
  );
}

// InviteLink.propTypes = {
// };

export default InviteLink;
