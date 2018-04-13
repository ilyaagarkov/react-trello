import React, { Component } from "react";
import PropTypes from "prop-types"
import { compose } from "redux";
import './App.css';
import Header from "./layout/header";
import Content from "./layout/content"
import Modal from "./layout/modal"
import listsHOC from "./board/listsHOC";
import tasksHOC from "./tasks/tasksHOC";
import Columns from "./board/components/columns";
import TaskFrom from "./tasks/components/taskForm";
import { listPropTypes } from "./board/propTypes";
import { taskPropTypes } from "./tasks/propTypes";

class App extends Component {

  static propTypes = {
    getListsForBoard: PropTypes.func.isRequired,
    lists: PropTypes.arrayOf(listPropTypes).isRequired,
    getTasks: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    groupedTask: PropTypes.objectOf(PropTypes.arrayOf(taskPropTypes)).isRequired,
    startEditTask: PropTypes.func.isRequired,
    endEditTask: PropTypes.func.isRequired,
    editedTask: taskPropTypes,
  }

  componentDidMount(){
    this.props.getListsForBoard();
    this.props.getTasks();
  }

  handleTaskMoved = (task, listId, position) => {
    this.props.moveTask(task, listId, position);
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Content>
          <Columns 
            columns={this.props.lists} 
            tasks={this.props.groupedTask} 
            onTaskMoved={this.handleTaskMoved} 
            onTaskClick={this.props.startEditTask}
            />
        </Content>
        {this.props.editedTask && <Modal> <TaskFrom task={this.props.editedTask} onChange={this.props.endEditTask} /> </Modal>}
      </div>
    );
  }
}

export default compose(
  listsHOC,
  tasksHOC
)(App);
