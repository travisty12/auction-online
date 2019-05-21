import React from 'react';
// import PropTypes from 'prop-types';
import Join from './Join';
import Create from './Create';
import { connect } from 'react-redux';
import * as actions from './../actions';

function Landing(props){
  const { dispatch } = props;
  const { watchFirebaseRoomsRef } = actions;
  dispatch(watchFirebaseRoomsRef());
  return (
    <div className="landing">
      <style jsx>{`
      .landing {
        height: 90%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      button {
        background-color: red;
        border: none;
        padding: 5px;
        color: white;
      }
      `}</style>
      <Create />
      <Join />
    </div>
  );
}

// Landing.propTypes = {
// };

export default connect()(Landing);
