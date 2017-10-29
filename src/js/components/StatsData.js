import React, { Component } from 'react';

class StatsData extends Component {

 render() {

function _handleOnClick() {
  console.log("clicked");
}
    return (
      <button onClick={() => _handleOnClick()}>Click me</button>
    );
  }
}

export default StatsData;

