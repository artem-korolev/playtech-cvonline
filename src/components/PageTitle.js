import React, { Component } from 'react'

class PageTitle extends Component {
  render() {
    return (
        <div style={{ fontFamily: 'TitilliumWeb-Bold', color:' #081c4a', fontSize: '36px', fontWeight: 700, lineHeight: '68.2px' }}>
            {this.props.children}
        </div>
    );
  }
}

export default PageTitle;
