import React, { Component } from 'react'

class MainWrapper extends Component {
  render() {
    return (
        <main style={{margin: "0 auto", position: 'relative', width: '1000px' }}>
        {this.props.children}
        </main>
    );
  }
}

export default MainWrapper;
