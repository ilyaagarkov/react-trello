import React from "react";
//import './index.css';

export default class TaskForm extends React.Component{

  handleClick = () => {
    this.props.onChange({
      ...this.props.task,
      name: this.input.value
    })
  }

  render () {
    return (
      <div className="taskForm">
        <input ref={e => this.input = e} type="text" defaultValue={this.props.task.name} />
        <button onClick={this.handleClick}>Save</button>
      </div>
    )
  }
}