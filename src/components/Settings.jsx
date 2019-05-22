import React from 'react';
import {Link} from 'react-router-dom';
import Time from './Time';
import BidInfo from './BidInfo';
import {connect} from 'react-redux';
import {setSettings} from './../actions';
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '2019-05-23T10:00',
      minBid: '5',
      tpi: '10'
    }
    this.timeSet = this.timeSet.bind(this);
    this.minBidSet = this.minBidSet.bind(this);
    this.tpiSet = this.tpiSet.bind(this);
    this.confirmSettings = this.confirmSettings.bind(this);
  }

  timeSet(time) {
    this.setState({time: time});
  }
  minBidSet(minBid) {
    this.setState({minBid: minBid});
  }
  tpiSet(tpi) {
    this.setState({tpi: tpi});
  }
  confirmSettings() {
    const { dispatch } = this.props;
    dispatch(setSettings(this.props.roomBuilt, this.state));
  }

  render() {
    const SettingsStyle = {
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    };
    const ButtonStyle = {
      backgroundColor: '#45B5FF',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px 5px 15px',
      color: 'white',
      fontSize: '2.75rem',
      textDecoration: 'none',
    };

    return (
      <div style={SettingsStyle}>
        <h1>Settings</h1>
        <h4>time: {this.state.time} - min bid: ${this.state.minBid} - tpi: {this.state.tpi} seconds</h4>
        <Time onTimeSet = {this.timeSet} />
        <BidInfo onMinBidSet = {this.minBidSet} onTpiSet = {this.tpiSet} />
        <button onClick={this.confirmSettings} ><Link style={ButtonStyle} to='/setup'>Confirm and Return</Link></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt
  };
};

// Settings.propTypes = {
// };

export default connect(mapStateToProps)(Settings);
