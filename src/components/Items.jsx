import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Previous from './Previous';
import Current from './Current';

function Items(props){

  const minBid = 5;
  console.log(props.settings);
  const ItemsStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  };
  return (
    <div style={ItemsStyle}>
      <Current itemList={props.itemList} />
      <Previous itemList={props.itemList} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    itemList: state.newItem,
    settings: state.settings,
  };
};

// Items.propTypes = {
// };

export default connect(mapStateToProps)(Items);
