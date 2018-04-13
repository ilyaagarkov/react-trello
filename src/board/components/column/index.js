import React from "react";
import PropTypes from "prop-types"
import { compose } from "redux";
import { DropTarget } from "react-dnd";
import './index.css';
import { taskPropTypes } from "../../../tasks/propTypes";
import DragableTask from "../../../tasks/components/tasks";
import cn from "classnames";

function dragTagrgetComponent({ isOver, connectDropTarget, children }) {
  return connectDropTarget(
    <div>
      {children}
      <div className={cn("dragTarget", { "dragTarget--isOver": isOver })} />
    </div>
  )
}

const squareTarget = {
  drop(props, monitor) {
    props.onTaskMoved(monitor.getItem(), props.colunmId, props.position)
  },
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedItem: monitor.getItem()
  };
}

const DragTagrget = compose(
  DropTarget('task', squareTarget, collect)
)(dragTagrgetComponent)

export default class BoardColumn extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    onTaskMoved: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(taskPropTypes).isRequired,
    onTaskClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    tasks: []
  }

  render() {

    const { tasks, onTaskMoved } = this.props;

    return (
      <div className="boardColumn">
        {this.props.name}
        <DragTagrget colunmId={this.props.id} position={1} onTaskMoved={onTaskMoved} />
        {tasks.map((task) => (
          <div key={task.id}  className="boardColumn__item">
            <DragTagrget colunmId={this.props.id} position={task.position + 1} onTaskMoved={onTaskMoved}>
              <DragableTask  {...task} onTaskClick={this.props.onTaskClick}>{task.name}</DragableTask>
            </DragTagrget>
          </div>

        ))}
      </div>
    )
  }
}
