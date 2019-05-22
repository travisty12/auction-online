import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changePreviousView} from './../actions';

function Previous(props){
  let previous = null;
  let clicked = false;
  const {dispatch} = props;
  function buttonClick() {
    dispatch(changePreviousView());
  }
  const ButtonStyle = {
    backgroundColor: '#45B5FF',
    border: 'none',
    borderRadius: '10px',
    padding: '5px 15px 5px 15px',
    color: 'white',
    fontSize: '2.75rem',
  };
  const PreviousStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  const PreviousListStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  if (props.previousView) {
    previous = <button style={ButtonStyle} onClick={() => buttonClick()}>Previous Items</button>;
  } else {
    console.log(props.itemList);
    previous = <div style={PreviousStyle}><h3 onClick={() => buttonClick()}>Close</h3>{props.itemList.map((item, index) =>
      <div style={PreviousListStyle} key={index}>
        <div>
          <h3>{item}</h3>
          <h3>${item}</h3>
        </div>
        <h3>{item}</h3>
      </div>
    )}</div>;
  }
  return (
    <div style={PreviousStyle}>
      {previous}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    previousView: state.previousView,
    
  };
};

Previous.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number,PropTypes.string]))
};

export default connect(mapStateToProps)(Previous);
