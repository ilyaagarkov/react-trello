import React from "react";
import './index.css';

export default class Content extends React.PureComponent {
  render() {
    return (
      <div className="appContent">
        {this.props.children}
      </div>  
    )
  }
}