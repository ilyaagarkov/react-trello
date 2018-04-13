import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import './index.css'
import cn from "classnames";

class Task extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    onTaskClick: PropTypes.func.isRequired,
  }

  handleClickTask = () => {
    this.props.onTaskClick(this.props.id)
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div onClick={this.handleClickTask} className={cn("Task", {'Task--isDragging': isDragging})}>
        {this.props.name}
      </div>
    )
  }
}

const TaskSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

export default DragSource('task', TaskSource, collect)(Task)
