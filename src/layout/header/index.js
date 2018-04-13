import React from "react";
import './index.css';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="appHeader">
        <h1>React-Trello</h1>
      </div>  
    )
  }
}