import React from 'react';
import InviteLink from './InviteLink';
import AddItems from './AddItems';
import { Link, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setView } from './../actions';

class Setup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    }
  }
  render() {
    const { dispatch } = this.props;
    dispatch(setView());
    const SetupStyle = {
      display: 'flex',
      height: '90%',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    };
    console.log(this.props.roomBuilt);
    const ButtonStyle = {
      backgroundColor: '#45B5FF',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px 5px 15px',
      color: 'white',
      fontSize: '2.75rem',
    };
    let safeguard = null;
    if (!this.props.roomBuilt || this.state.done) {
      safeguard = <Redirect to='/' />;
    } else {
      safeguard = null;
    }
    return (
      <div style={SetupStyle}>
        {safeguard}
        <InviteLink linkId = {this.props.roomBuilt} />
        <Link to='/settings'><button style={ButtonStyle}>Settings</button></Link>
        <AddItems />
        <button onClick={() => this.setState({done: true})} style={ButtonStyle}>Finalize</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomBuilt: state.roomBuilt
  };
};

// Setup.propTypes = {
// };

export default connect(mapStateToProps)(Setup);
