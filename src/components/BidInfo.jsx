import React from 'react';
// import PropTypes from 'prop-types';
import MinBid from './MinBid';
import TimePerItem from './TimePerItem';

class BidInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    }
    this.bidSubmit = this.bidSubmit.bind(this);
  }

  bidSubmit(bid) {
    if (bid) {
      console.log(bid);
    }
  }

  render() {
    const ButtonStyle = {
      backgroundColor: '#800000',
      color: 'white',
      padding: '5px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '2.75rem',
    };
    const BidInfoStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
    let biddingSetup = null;
    if (!this.state.isShown) {
      biddingSetup = <button style={ButtonStyle} onClick={() => this.setState({isShown: true})}>Set bid specs</button>;
    } else {
      biddingSetup = <div style={BidInfoStyle}><MinBid /><TimePerItem /></div>;
    }
    return (
      <div>
        {biddingSetup}
      </div>
    );
  }
}

export default BidInfo;
