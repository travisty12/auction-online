import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class Time extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    }
    this.timeSubmit = this.timeSubmit.bind(this);
  }

  timeSubmit(time) {
    if (time) {
      console.log(time);
    }
  }

  render() {
    const TimeStyle = {
      backgroundColor: '#800000',
      color: 'white',
      padding: '5px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '2.75rem',
    };
    const DivStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
    let _time = null;
    let timeSetup = null;
    function buttonClick() {
    }
    if (!this.state.isShown) {
      timeSetup = <button style={TimeStyle} onClick={() => this.setState({isShown: true})}>Set time</button>;
    } else {
      timeSetup = <div style={DivStyle} ><h3>Set auction time:</h3><input type="datetime-local" ref={(input) => {_time = input;}} /><button onClick={() => this.timeSubmit(_time.value)} style={TimeStyle}>Submit</button></div>;
    }
    return (
      <div>
        {timeSetup}
      </div>
    );
  }
}

// Time.propTypes = {
// };

export default Time;
