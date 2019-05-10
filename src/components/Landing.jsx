import React from 'react';
import PropTypes from 'prop-types';
import Join from './Join';
import Create from './Create';
import { Link } from 'react-router-dom';

function Landing(props){
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
      <h1>Auction Online</h1>
      <Create />
      <Join />
    </div>
  );
}

Landing.propTypes = {
};

export default Landing;
