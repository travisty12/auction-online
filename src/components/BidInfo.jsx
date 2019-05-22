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
      backgroundColor: '#45B5FF',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px 5px 15px',
      color: 'white',
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
      biddingSetup = <div style={BidInfoStyle}><MinBid onMinBidSet = {this.props.onMinBidSet} /><TimePerItem onTpiSet = {this.props.onTpiSet} /></div>;
    }
    return (
      <div>
        {biddingSetup}
      </div>
    );
  }
}

export default BidInfo;
