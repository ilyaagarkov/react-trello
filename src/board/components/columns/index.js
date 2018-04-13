import React from "react";
import PropTypes from "prop-types"
import { compose } from "redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import './index.css';
import { listPropTypes } from "../../propTypes";
import { taskPropTypes } from "../../../tasks/propTypes";
import Column from "../column"
 
class BoardColumns extends React.Component {

  static propTypes = {
    columns: PropTypes.arrayOf(listPropTypes).isRequired,
    tasks: PropTypes.objectOf(PropTypes.arrayOf(taskPropTypes)).isRequired,
    onTaskMoved: PropTypes.func.isRequired,
    onTaskClick: PropTypes.func.isRequired,
  }

  render() {

    return (
      <div className="boardColumns">
        {this.props.columns.map(column => (
          <div key={column.id} className="boardColumns__item">
            <Column 
              {...column} 
              tasks={this.props.tasks[column.id]} 
              onTaskMoved={this.props.onTaskMoved} 
              onTaskClick={this.props.onTaskClick}
            />
          </div>  
        ))}
      </div>
    )
  }
}

export default compose(
  DragDropContext(HTML5Backend),
)(BoardColumns)
